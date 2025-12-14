# Differences between Xogot and Godot

Xogot is a native adaptation of the Godot engine, optimized specifically for iPad.
This page summarizes the most important differences you’ll notice when moving between desktop Godot and Xogot.

## At a glance

- **Scripting:** GDScript-only (no C#, no compiled-language extensions).
- **Add-ons:** Curated, adapted Asset Library; most pure-GDScript plugins can be imported.
- **Settings UI:** Project settings live under the top-right menu and are grouped differently.
- **Visual Shaders:** Visual Shaders run, but the Visual Shader Editor is not included.
- **Interface:** Touch-first layout, native iconography, and fewer hover-driven affordances (like tooltips).

## Scripting and Languages

### Only GDScript

Xogot utilizes **GDScript** as its primary scripting language. The development team has chosen to focus exclusively on GDScript to maintain a lightweight and efficient application footprint.

While supporting additional toolchains like **C#** is technically possible on iOS, doing so would introduce significant external dependencies. By focusing on GDScript, Xogot ensures a streamlined and responsive experience optimized for mobile hardware.

> Note
> This also means plugins or workflows that depend on compiled languages (C#, C++, Swift, Rust, etc.) are not currently supported in Xogot.

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

> Tip
> If a plugin’s functionality is pure scripting but its UI looks off, it may still be usable—expect visual mismatches rather than total failure.

## Project Settings

### Navigation

Accessing project configuration differs slightly from the desktop interface to accommodate the streamlined header:

- **Access:** Tap the **...** button in the upper-right corner and select **Settings** to open Project Settings.
- **Tabs:** Settings tabs found in Godot (such as **Input Map**, **Autoload**, and **Plugins**) are accessed via the **General** dropdown menu at the top of the Settings dialog.

### Xogot Settings

Xogot includes a **Xogot Settings** section that replaces **Editor Settings** from Godot.
It is streamlined to align with iOS system conventions.

#### Icon preferences

By default, Xogot uses native **SF Symbols** for a cohesive iPadOS look.
You can revert to standard Godot icons by toggling **Prefer Godot Icons** under **Environment** settings.

## Visual Shaders

### Runtime support (included)

Xogot supports running Visual Shaders created on the desktop.

### Editing (not included)

Xogot does not currently include the Visual Shader Editor.
To create or modify a Visual Shader graph, use the desktop version of Godot.

## Interface Adaptations

### Optimized layout

The editor interface is adapted to maximize screen real estate for iPad, including toolbars and panels that can be hidden or revealed as needed.

For a detailed guide to the Xogot editor layout, see <doc:Xogot-User-Interface>.

### Tooltips

Because iPadOS does not rely on a hover cursor by default, tooltips are generally not surfaced in the UI.
