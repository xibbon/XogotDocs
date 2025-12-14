# Differences between Xogot and Godot

Xogot is a native adaptation of the Godot engine, optimized specifically for the iPad environment.
This page outlines the key technical and functional differences developers should expect when moving between the desktop engine and Xogot.

## Scripting and Languages

### GDScript exclusive

Xogot utilizes **GDScript** as its primary scripting language. The development team has chosen to focus exclusively on GDScript to maintain a lightweight and efficient application footprint.

While supporting additional toolchains like **C#** is technically possible on iOS, doing so would introduce significant external dependencies. By focusing on GDScript, Xogot ensures a streamlined and responsive experience optimized for mobile hardware.

## Add-ons and Extensions

### The Xogot Asset Library

Xogot includes a custom, curated **Asset Library** with popular Godot community plugins.
These add-ons have been adapted by the Xogot team for the iPad environment:

- They are confirmed to function reliably on the platform.
- Their visual elements have been translated to native Swift UI and touch interactions.
- If originally written in a compiled language, they have been specially adapted or compiled to function within Xogot's constraints.

If there is an add-on you need that is not in the library, you can suggest it to the [Xogot team](https://xogot.com/contact-us) for adaptation.

### Importing existing plugins

You can import most existing plugins written entirely in **GDScript** into your projects.

- **Compatibility:** These plugins should function, but any visual elements they add may look inconsistent or “weird” compared to Xogot's native UI.
- **Non-GDScript:** Plugins dependent on compiled languages (C++, C#, etc.) or **GDExtension** will not work.

## Project Settings

### Navigation

Accessing project configuration differs slightly from the desktop interface to accommodate the streamlined header:

- **Access:** Tap the **...** button in the upper-right corner and select **Settings**.
- **Tabs:** Settings tabs found in Godot (such as **Input Map**, **Autoload**, and **Plugins**) are accessed via the **General** dropdown menu at the top of the Settings dialog.

### Xogot Settings

Xogot includes a **Xogot Settings** section that replaces **Editor Settings** from Godot.
It is streamlined to align with iOS system conventions.

#### Icon preferences

By default, Xogot uses native **SF Symbols** for a cohesive iPadOS look.
You can revert to standard Godot icons by toggling **Prefer Godot Icons** under **Environment** settings.

## Visual Shaders

### Runtime support

Xogot supports running Visual Shaders created on the desktop.

### Editing

Xogot does not currently include the Visual Shader Editor.
To create or modify a Visual Shader graph, use the desktop version of Godot.

## Interface Adaptations

### Optimized layout

The editor interface is adapted to maximize screen real estate for iPad, including toolbars and panels that can be hidden or revealed as needed.

For a detailed guide to the Xogot editor layout, see <doc:Xogot-User-Interface>.

### Tooltips

Because iPadOS does not rely on a hover cursor by default, tooltips are generally not surfaced in the UI.
