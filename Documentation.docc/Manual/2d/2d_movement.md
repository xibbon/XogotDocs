# 2D movement overview

## Introduction

Every beginner has been there: "How do I move my character?" Depending on the
style of game you're making, you may have special requirements, but in general
the movement in most 2D games is based on a small number of designs.

We'll use [CharacterBody2D](https://docs.godotengine.org/en/stable/classes/class_characterbody2d.html#class-characterbody2d) for these examples,
but the principles will apply to other node types (Area2D, RigidBody2D) as well.

## Setup

Each example below uses the same scene setup. Start with a CharacterBody2D with two
children: Sprite2D and CollisionShape2D. You can use the Godot icon ("icon.png")
for the Sprite2D's texture or use any other 2D image you have.

Open your project, tap the upper left menu icon, and then open Settings. Navigate to the drop down menu and open the  the "Input Map" tab. Add the following
input actions (see <doc:inputevent> for details):

@Image(source: "movement_inputs.png")
*Expand on the action events for each Input. Following standard WASD and joystick axis controls. Set the Click to Left Mouse Button.* 

## 8-way movement


In this scenario, you want the user to press the four directional keys (up/left/down/right
or W/A/S/D) and move in the selected direction. The name "8-way movement" comes from the
fact that the player can move diagonally by pressing two keys at the same time.

Add a script to the character body and add the following code:

```gdscript
extends CharacterBody2D

@export var speed = 400

func get_input():
	var input_direction = Input.get_vector("left", "right", "up", "down")
	velocity = input_direction * speed

func _physics_process(delta):
	get_input()
	move_and_slide()
```

In the get_input() function, we use [Input](https://docs.godotengine.org/en/stable/classes/class_input.html#class-input) get_vector() to check for the
four key events and sum return a direction vector.

We can then set our velocity by multiplying this direction vector, which has a
length of 1, by our desired speed.

> Tip: If you've never used vector math before, or need a refresher,
> you can see an explanation of vector usage in Godot at <doc:vector_math>.
>

[![8-way movement demo](https://img.youtube.com/vi/asJtxd2eyk8/hqdefault.jpg)](https://youtu.be/asJtxd2eyk8?si=5ZcsXxGrjs5UrBV2)
*Video demo — demonstrates 8-way movement controls.*

> Note:
>
> If the code above does nothing when you press the keys, double-check that
> you've set up input actions correctly as described in the
> <doc:2d_movement#Setup> part of this tutorial.
>

## Rotation + movement

This type of movement is sometimes called "Asteroids-style" because it resembles
how that classic arcade game worked. Pressing left/right rotates the character,
while up/down moves it forward or backward in whatever direction it's facing.

Here we've added two variables to track our rotation direction and speed.
The rotation is applied directly to the body's rotation property.

```gdscript
extends CharacterBody2D

@export var speed = 400
@export var rotation_speed = 1.5

var rotation_direction = 0

func get_input():
	rotation_direction = Input.get_axis("left", "right")
	velocity = transform.x * Input.get_axis("down", "up") * speed

func _physics_process(delta):
	get_input()
	rotation += rotation_direction * rotation_speed * delta
	move_and_slide()
```

To set the velocity, we use the body's transform.x which is a vector pointing
in the body's "forward" direction, and multiply that by the speed.

## Rotation + movement (mouse)

This style of movement is a variation of the previous one. This time, the direction
is set by the mouse position instead of the keyboard. The character will always
"look at" the mouse pointer. The forward/back inputs remain the same, however.

```gdscript
extends CharacterBody2D

@export var speed = 400

func get_input():
	look_at(get_global_mouse_position())
	velocity = transform.x * Input.get_axis("down", "up") * speed

func _physics_process(delta):
	get_input()
	move_and_slide()
```

Here we're using the [Node2D](https://docs.godotengine.org/en/stable/classes/class_node2d.html#class-node2d) look_at() method to
point the player towards the mouse's position. Without this function, you
could get the same effect by setting the angle like this:

## Click-and-move

This last example uses only the mouse to control the character. Clicking
on the screen will cause the player to move to the target location.
 
[![Click-and-move demo](https://img.youtube.com/vi/I8Mxltv2BUk/hqdefault.jpg)](https://youtu.be/I8Mxltv2BUk?si=_aGOagF999d_rvlj)
*Video demo — a concise walkthrough of the click-and-move mechanics.*

```gdscript
extends CharacterBody2D

@export var speed = 400

var target = position

func _input(event):
	# Use is_action_pressed to only accept single taps as input instead of mouse drags.
	if event.is_action_pressed(&"click"):
		target = get_global_mouse_position()

func _physics_process(delta):
	velocity = position.direction_to(target) * speed
	# look_at(target)
	if position.distance_to(target) > 10:
		move_and_slide()
```

Note the distance_to() check we make prior to movement. Without this test,
the body would "jitter" upon reaching the target position, as it moves
slightly past the position and tries to move back, only to move too far and
repeat.

Uncommenting the look_at() line will also turn the body to point in its
direction of motion if you prefer.

> Tip: This technique can also be used as the basis of a "following" character.
> The target position can be that of any object you want to move to.
>

## Summary

You may find these code samples useful as starting points for your own projects.
Feel free to use them and experiment with them to see what you can make.

You can download a sample project from the Learning Center.