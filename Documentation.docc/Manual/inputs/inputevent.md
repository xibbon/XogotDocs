# Using InputEvent

## What is it?

Managing input is usually complex, no matter the OS or platform. To ease
this a little, a special built-in type is provided, [InputEvent](https://docs.godotengine.org/en/stable/classes/class_inputevent.html#class-inputevent).
This datatype can be configured to contain several types of input
events. Input events travel through the engine and can be received in
multiple locations, depending on the purpose.

Here is a quick example, closing your game if the escape key is hit:

```
func _unhandled_input(event):
    if event is InputEventKey:
        if event.pressed and event.keycode == KEY_ESCAPE:
            get_tree().quit()
```

However, it is cleaner and more flexible to use the provided [InputMap](https://docs.godotengine.org/en/stable/classes/class_inputmap.html#class-inputmap) feature,
which allows you to define input actions and assign them different keys. This way,
you can define multiple keys for the same action (e.g. the keyboard escape key and the start button on a gamepad).
You can then more easily change this mapping in the project settings without updating your code,
and even build a key mapping feature on top of it to allow your game to change the key mapping at runtime!

You can set up your InputMap in the **Input Map** pane of the Project Settings
(see <doc:Input-Map>) and then use those actions like this:

```
func _process(delta):
    if Input.is_action_pressed("ui_right"):
        # Move right.
```

## How does it work?

Every input event is originated from the user/player (though it's
possible to generate an InputEvent and feed them back to the engine,
which is useful for gestures). The DisplayServer for each platform will read
events from the operating system, then feed them to the root [Window](https://docs.godotengine.org/en/stable/classes/class_window.html#class-window).

The window's [Viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html#class-viewport) does quite a lot of stuff with the
received input, in order:

@Image(source: "input_event_flow.png")

1. If the Viewport is embedding Windows, the Viewport tries to interpret the event in its
capability as a Window-Manager (e.g. for resizing or moving Windows).

1. Next if an embedded Window is focused, the event is sent to that Window and processed in
the Window's Viewport and afterwards treated as handled. If no embedded Window is focused,
the event is sent to the nodes of the current viewport in the following order.

1. First of all, the standard [Node._input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-input) function
will be called in any node that overrides it (and hasn't disabled input processing with [Node.set_process_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-set-process-input)).
If any function consumes the event, it can call [Viewport.set_input_as_handled()](https://docs.godotengine.org/en/stable/classes/class_viewport.html#class-viewport-method-set-input-as-handled), and the event will
not spread any more. This ensures that you can filter all events of interest, even before the GUI.
For gameplay input, [Node._unhandled_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-unhandled-input) is generally a better fit, because it allows the GUI to intercept the events.

1. Second, it will try to feed the input to the GUI, and see if any
control can receive it. If so, the [Control](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control) will be called via the
virtual function [Control._gui_input()](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control-private-method-gui-input) and the signal
"gui_input" will be emitted (this function is re-implementable by
script by inheriting from it). If the control wants to "consume" the
event, it will call [Control.accept_event()](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control-method-accept-event) and the event will
not spread any more. Use the [Control.mouse_filter](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control-property-mouse-filter)
property to control whether a [Control](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control) is notified
of mouse events via [Control._gui_input()](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control-private-method-gui-input)
callback, and whether these events are propagated further.

1. If so far no one consumed the event, the [Node._shortcut_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-shortcut-input) callback
will be called if overridden (and not disabled with
[Node.set_process_shortcut_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-set-process-shortcut-input)).
This happens only for [InputEventKey](https://docs.godotengine.org/en/stable/classes/class_inputeventkey.html#class-inputeventkey),
[InputEventShortcut](https://docs.godotengine.org/en/stable/classes/class_inputeventshortcut.html#class-inputeventshortcut) and [InputEventJoypadButton](https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadbutton.html#class-inputeventjoypadbutton).
If any function consumes the event, it can call [Viewport.set_input_as_handled()](https://docs.godotengine.org/en/stable/classes/class_viewport.html#class-viewport-method-set-input-as-handled), and the
event will not spread any more. The shortcut input callback is ideal for treating events that are intended as shortcuts.

1. If so far no one consumed the event, the [Node._unhandled_key_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-unhandled-key-input) callback
will be called if overridden (and not disabled with
[Node.set_process_unhandled_key_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-set-process-unhandled-key-input)).
This happens only if the event is an [InputEventKey](https://docs.godotengine.org/en/stable/classes/class_inputeventkey.html#class-inputeventkey).
If any function consumes the event, it can call [Viewport.set_input_as_handled()](https://docs.godotengine.org/en/stable/classes/class_viewport.html#class-viewport-method-set-input-as-handled), and the
event will not spread any more. The unhandled key input callback is ideal for key events.

1. If so far no one consumed the event, the [Node._unhandled_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-unhandled-input) callback
will be called if overridden (and not disabled with
[Node.set_process_unhandled_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-set-process-unhandled-input)).
If any function consumes the event, it can call [Viewport.set_input_as_handled()](https://docs.godotengine.org/en/stable/classes/class_viewport.html#class-viewport-method-set-input-as-handled), and the
event will not spread any more. The unhandled input callback is ideal for full-screen gameplay events, so they are not received when a GUI is active.

1. If no one wanted the event so far, and [Object Picking](https://docs.godotengine.org/en/stable/classes/class_viewport.html#class-viewport-property-physics-object-picking)
is turned on, the event is used for object picking. For the root viewport, this can also be
enabled in [Project Settings](https://docs.godotengine.org/en/stable/classes/class_projectsettings.html#class-projectsettings-property-physics-common-enable-object-picking).
In the case of a 3D scene if a [Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html#class-camera3d) is assigned to the Viewport, a ray
to the physics world (in the ray direction from the click) will be cast. If this ray hits an object,
it will call the [CollisionObject3D._input_event()](https://docs.godotengine.org/en/stable/classes/class_collisionobject3d.html#class-collisionobject3d-private-method-input-event)
function in the relevant physics object.
In the case of a 2D scene, conceptually the same happens with [CollisionObject2D._input_event()](https://docs.godotengine.org/en/stable/classes/class_collisionobject2d.html#class-collisionobject2d-private-method-input-event).

When sending events to its child and descendant nodes, the viewport will do so, as depicted in
the following graphic, in a reverse depth-first order, starting with the node at the bottom of
the scene tree, and ending at the root node. Excluded from this process are Windows
and SubViewports.

@Image(source: "input_event_scene_flow.png")

> Note:
>
> This order doesn't apply to [Control._gui_input()](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control-private-method-gui-input), which uses
> a different method based on event location or focused Control. GUI **mouse** events also travel
> up the scene tree, subject to the [Control.mouse_filter](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control-property-mouse-filter)
> restrictions described above. However, since these events target specific Controls, only direct ancestors of
> the targeted Control node receive the event. GUI **keyboard and joypad** events do not travel
> up the scene tree, and can only be handled by the Control that received them. Otherwise, they will be
> propagated as non-GUI events through [Node._unhandled_input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-unhandled-input).
>

Since Viewports don't send events to other [SubViewports](https://docs.godotengine.org/en/stable/classes/class_subviewport.html#class-subviewport), one of the following
methods has to be used:

1. Use a [SubViewportContainer](https://docs.godotengine.org/en/stable/classes/class_subviewportcontainer.html#class-subviewportcontainer), which automatically
sends events to its child [SubViewports](https://docs.godotengine.org/en/stable/classes/class_subviewport.html#class-subviewport) after
[Node._input()](https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-private-method-input) or [Control._gui_input()](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control-private-method-gui-input).

1. Implement event propagation based on the individual requirements.

In accordance with Godot's node-based design, this enables
specialized child nodes to handle and consume particular events, while
their ancestors, and ultimately the scene root, can provide more
generalized behavior if needed.

## Anatomy of an InputEvent

[InputEvent](https://docs.godotengine.org/en/stable/classes/class_inputevent.html#class-inputevent) is just a base built-in type, it does not represent
anything and only contains some basic information, such as event ID
(which is increased for each event), device index, etc.

There are several specialized types of InputEvent, described in the table below:

Event | Description
----- | -----------
[InputEvent](https://docs.godotengine.org/en/stable/classes/class_inputevent.html#class-inputevent) | Empty Input Event.
[InputEventKey](https://docs.godotengine.org/en/stable/classes/class_inputeventkey.html#class-inputeventkey) | Contains a keycode and Unicode value,
as well as modifiers.
[InputEventMouseButton](https://docs.godotengine.org/en/stable/classes/class_inputeventmousebutton.html#class-inputeventmousebutton) | Contains click information, such as
button, modifiers, etc.
[InputEventMouseMotion](https://docs.godotengine.org/en/stable/classes/class_inputeventmousemotion.html#class-inputeventmousemotion) | Contains motion information, such as
relative and absolute positions and
speed.
[InputEventJoypadMotion](https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadmotion.html#class-inputeventjoypadmotion) | Contains Joystick/Joypad analog axis
information.
[InputEventJoypadButton](https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadbutton.html#class-inputeventjoypadbutton) | Contains Joystick/Joypad button
information.
[InputEventScreenTouch](https://docs.godotengine.org/en/stable/classes/class_inputeventscreentouch.html#class-inputeventscreentouch) | Contains multi-touch press/release
information. (only available on mobile
devices)
[InputEventScreenDrag](https://docs.godotengine.org/en/stable/classes/class_inputeventscreendrag.html#class-inputeventscreendrag) | Contains multi-touch drag information.
(only available on mobile devices)
[InputEventMagnifyGesture](https://docs.godotengine.org/en/stable/classes/class_inputeventmagnifygesture.html#class-inputeventmagnifygesture) | Contains a position, a factor as well
as modifiers.
[InputEventPanGesture](https://docs.godotengine.org/en/stable/classes/class_inputeventpangesture.html#class-inputeventpangesture) | Contains a position, a delta as well as
modifiers.
[InputEventMIDI](https://docs.godotengine.org/en/stable/classes/class_inputeventmidi.html#class-inputeventmidi) | Contains MIDI-related information.
[InputEventShortcut](https://docs.godotengine.org/en/stable/classes/class_inputeventshortcut.html#class-inputeventshortcut) | Contains a shortcut.
[InputEventAction](https://docs.godotengine.org/en/stable/classes/class_inputeventaction.html#class-inputeventaction) | Contains a generic action. These events
are often generated by the programmer
as feedback. (more on this below)

## Input actions

Input actions are a grouping of zero or more InputEvents into a commonly
understood title (for example, the default "ui_left" action grouping both joypad-left input and a keyboard's left arrow key). They are not required to represent an
InputEvent but are useful because they abstract various inputs when
programming the game logic.

This allows for:

- The same code to work on different devices with different inputs (e.g.,
keyboard on PC, Joypad on console).

- Input to be reconfigured at runtime.

- Actions to be triggered programmatically at runtime.

Actions can be created from the Project Settings menu in the **Input Map**
tab and assigned input events.  Xogot also ships templates of ready-made
actions for common game genres; see <doc:Input-Map>.

Any event has the methods [InputEvent.is_action()](https://docs.godotengine.org/en/stable/classes/class_inputevent.html#class-inputevent-method-is-action),
[InputEvent.is_pressed()](https://docs.godotengine.org/en/stable/classes/class_inputevent.html#class-inputevent-method-is-pressed) and [InputEvent.is_echo()](https://docs.godotengine.org/en/stable/classes/class_inputevent.html#class-inputevent-method-is-echo).

Alternatively, it may be desired to supply the game back with an action
from the game code (a good example of this is detecting gestures).
The Input singleton has a method for this:
[Input.parse_input_event()](https://docs.godotengine.org/en/stable/classes/class_input.html#class-input-method-parse-input-event). You would normally use it like this:

```
var ev = InputEventAction.new()
# Set as ui_left, pressed.
ev.action = "ui_left"
ev.pressed = true
# Feedback.
Input.parse_input_event(ev)
```

> Seealso:
>
> See <doc:first_3d_game_input_actions> for a tutorial on adding input
> actions in the project settings.
>

## InputMap

Customizing and re-mapping input from code is often desired. If your
whole workflow depends on actions, the [InputMap](https://docs.godotengine.org/en/stable/classes/class_inputmap.html#class-inputmap) singleton is
ideal for reassigning or creating different actions at runtime. This
singleton is not saved (must be modified manually) and its state is run
from the project settings (project.godot). So any dynamic system of this
type needs to store settings in the way the programmer best sees fit.