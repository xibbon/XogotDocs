# Embedded Game View

Run and live-edit your game directly within the main editor interface.

## Testing Your Game with Xogot’s Embedded Game View

Xogot’s **Embedded Game View** lets you run your game directly inside the editor, 
making it easy to test changes and interact with your running scene without switching 
contexts. This is especially useful on iPad, where launching a separate game window 
can interrupt your workflow. With Embedded Game View, you can instantly preview 
gameplay, tweak properties, and inspect your live scene — all from a single screen.

@Image(source: "EmbeddedGameView.png",
       alt: "A screenshot showing 3D Platformer Starter Kit running in Embedded Game View")

## Launching the Embedded Game View

To access the Embedded Game View:

1. Tap the **Game Tab** (the gamepad 🎮 icon in the top toolbar).
2. You’ll see two options:

   * **Start Game in New Window** – behaves the same as the standard Play button.
   * **Start Game Here** – runs the game inside the main viewport (Embedded Game View).

Tap **Start Game Here** to launch the current project in the Embedded Game View.

## Running and Interacting with Your Game

When running inside the Embedded Game View:

* If your project has **Virtual Controller** enabled under **Project Settings > Input Devices**, onscreen controls will appear and function normally inside Xogot.

@Image(source: "EmbeddedGameViewToolbar.png",
       alt: "A screenshot showing toolbar buttons shown when project is running in Embedded Game View")

* At the top of the viewport, you’ll find three interaction modes:
  1. **Game** (default): Interact with the running game using touch or virtual controllers.
  2. **2D Selection**: Tap on 2D elements in the scene to select them.
  3. **3D Selection**: Tap on 3D elements to select them.

### Selection Features

Xogot provides two selection modes while your game is running: **2D Selection** 
and **3D Selection**. These let you tap on elements in your scene to select them 
directly — even while the game is still running. This is useful for debugging, 
inspecting objects, or modifying your scene in real time.

When in selection mode, you can toggle visual highlights for selected elements 
using the eye icon in the toolbar (4). 

You can also choose between two selection methods: single-tap selection (5), which 
immediately selects the topmost element under your finger, and list selection (6), 
which brings up a list of all selectable elements at the tap location, allowing 
you to pick the one you want.

@Image(source: "EmbeddedGameViewLiveEdit.png",
       alt: "A screenshot showing a player being scaled up in the Embedded Game View")

Once a node is selected, you can use the Inspector to adjust its properties 
on the fly. You might, for example, reposition an object, change its rotation, 
or scale it — and your changes will be applied immediately in the running game. 
This makes it easy to test layout and behavior changes without restarting your 
project.  

### Scene Tree Integration

While the Embedded Game View is active, the Scene panel displays two tabs: 
**Remote** and **Local**. The Remote Scene Tree reflects the live, running 
state of your game. Selecting a node in this tree will highlight and select 
it in the game view.

## Limitations

* **No Keyboard Input**: Games running in Embedded Game View can only receive
  keyboard input if you close the sidebar and inspector.

  * To work around this, consider adding alternative action mappings in your **Input Map** 
for any keyboard-bound actions you want to test from touch or gamepad input.
