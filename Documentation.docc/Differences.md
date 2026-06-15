# Differences between Xogot and Godot

Notable differences between Godot and our readaptaion of the UI to be Apple
platform focused.

We have three sections:

* General differences that apply to all platforms supported by Xogot

* Specific iPadOS/iOS differences compared to Godot

* Mac specific differences are currently tracked in the <doc:Mac-Preview> document.

# General Xogot and Godot Differences

## Icons

Control icons have been replaced with Apple's SF Symbols to better match
the look and feel of iPadOS, but if you want to bring back the Godot icons, you
can do so on "Settings/Xogot Settings/Environment/Prefer Godot Icons".  

#  Xogot on iPad and Godot on Desktop

## Layout changes 

Xogot's UI has been adapted to better suit various Apple idioms.

For iPad and iOS, we generally had to make things more tappable, which required
expanding the size of items, but the expansion also made us have to remove some
elements from the UI, as we did not have enough space to fit things.   The
functionality remains in place, it is just not always in the same places.

## Hover

Because the iPad does not have the concept of hovering over a button, tooltips
are not surfaced in the UI (unless you have a trackpad or a pencil). <doc:Xogot-User-Interface> provides a guide to the
layout and structure of Xogot's toolbars.

## Only gdscript

Xogot does not include support for C#, nor other compiled languages, including
Swift and Rust.

## Only gdscript add-ons and plugins

Xogot only support addons and plugins that are written in gdscript.  Extensions
written in C++, C#, or other compiled languages are not currently supported.

## Project Settings

In Xogot, tap the menu button in the upper-righthand corner and choose
**“Settings”** to open Project Settings.  The individual Project Settings tabs
from Godot, such as Input Map, Autoload and Plugins, can be navigated to by
tapping on the **General** in the drop-down list at the top of the Settings
dialog.

## Additional Resources

Watch this video to get an overview and a minimal project to break the ice:
@Video(
    source: "https://customer-fku244tec8fwlbfi.cloudflarestream.com/d9393fd9872838d31e98be4cee4cdedf/manifest/video.m3u8",
    caption: "Xogot for Godot Users: Getting Oriented on iPad & iPhone"
)
