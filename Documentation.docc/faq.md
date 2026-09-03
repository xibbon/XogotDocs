# FAQ

Answers to common questions about Xogot, Godot compatibility, supported
features, subscriptions, and working across Apple platforms.

## Is Xogot for Mac included with my iPad or iPhone purchase?

No. Xogot for Mac is a separate product and will require its own license. A
purchase or subscription for Xogot on iPad or iPhone, including the lifetime
unlock, covers iPad and iPhone but does not include Xogot for Mac.

We have not finalized pricing for Xogot for Mac, but are exploring bundles and
discounts for existing Xogot customers.

Bringing Xogot to the Mac is a significant undertaking. On iPad and iPhone, we
can focus on making the most important parts of Godot work well in a touch-first
environment. Godot is already free on Mac, so Xogot for Mac needs to provide
substantial additional value to justify the product and support its continued
development.

## Is Xogot Compatible with Godot?

Xogot provides an alternative user interface on top of the Godot and the Godot
Editor that is suitable for iOS and iPadOS.  At its core, it is still a Godot
4.4-based system.

We have made many changes to the user interface to work in small screens, and to
make it more closely aligned with Apple's Human Interface Guidelines, so the
user interface is not always exactly the same, but we have worked to ensure that
the capabilities that you need are always present.

For example, we have removed many configuration options on the Editor - as these
just affect the operation of the editor, and we have done so both to improve the
UX, and to simplify the learning curve on iOS.   But we did not do this for the
Project Settings - as these would have an impact on your code or how your game
works.

There are two important differences to keep in mind as well.  Xogot only
supports the GDScript language (see below) and Xogot does not support native
plugins, as these are not allowed on the AppStore (with the exception of
Terrain3D that we now bundle with Xogot).

## What scripting languages are supported by Xogot?

Xogot only support's Godot's GDScript language, plugins authored in other
languages are not available on the iPad.

## What kind of plugins does Xogot support?

Xogot only supports GDScript-based plugins.   

Plugins written in C# or C++ are not available on Xogot/iPad.

## Why does Xogot seem to lock up when opening my project?

It can take a while to re-import assets for your project to the iPad, and one of
Xogot's most visible limitation currently is that the progress indicators in the
UI are not shown, which can be a little jarring when importing a large new
project and Xogot not responding.   

It may take an unexpectedly long time for the project to load.  A fix will be
coming soon.

## Why is my game zoomed in or stretched when running on Xogot?

Recent Xogot updates introduce a new default Scale Mode called Auto, which selects 
a scaling behavior based on the device. In some projects, especially older ones or 
those not designed with high-DPI in mind, this can cause the game to appear zoomed 
in or stretched.

To restore the expected appearance, open Project Settings and set 
Display > Window > Scale Mode to Fractional. This matches the behavior of previous 
Xogot versions and the default in Godot 4.4.

## Why does my project close when I swipe up to close a running game?

When iPad Multitasking is disabled (Settings → Multitasking & Gestures → Multitasking → Off), 
Xogot cannot keep the editor and running game open as separate processes. In this 
configuration, swiping up to close the running game fully terminates the app, 
returning you to the project selection screen.

Because iPadOS does not provide a way for apps to detect whether Multitasking is disabled, 
Xogot cannot automatically adjust its behavior.

To work around this, we recommend re-enabling Multitasking in Settings. Alternatively, 
you can use the in-editor Stop button to end the game, or run the game in Xogot’s 
embedded game view tab.

## Why will my scene not open?
If you are unable to open scenes in your project, check if the output tab has errors like the following:

```
Texture (binding: 0, index 0) is not a valid texture.
Failed to create uniform set for batch.
Texture (binding: 0, index 0) is not a valid texture.
Failed to create uniform set for batch.
```

These indicate that you need to enable importing S3TC BPTC and ETC2 ASTC.  
       
To configure a compatible renderer, refer to this screenshot and follow the 
steps below:

@Image(source: "enable_imports.png"

1. Open settings by tapping the **...** in the upper-right corner and selecting **Settings**
2. Tap **Show Advanced** at the bottom of the *Project Settings* dialog
3. Type "*import*" in the search box
4. Enable **Import S3TC BPTC** **Import ETC2 ASTC**
5. Close the dialog

Then close and reopen the project so that these imports will run and the project should work as expected. 


## Why does my game show more of the canvas than it’s supposed to when running?

This issue might be caused by incorrect stretch settings. To resolve it:

1. Tap on the **...** button in the top-right corner of the app and select "Settings"
2. Scroll to the Display section on the left-hand column and tap "Window"
3. Scroll to the Stretch section and select a Mode of either "viewport" or "canvas_items."  

These modes will clip overflow and ensure that the game view is scaled correctly 
for the available screen space.

## Does Xogot work offline?

Yes, Xogot works without an internet or network connection.

The following is a list of optional features that require a network connection:

* Downloading the sample projects from the Learning Center.
* Downloading extensions from the Asset Library.
* Sharing a Game on the Web.

## Why is my TestFlight invite is expired, invalid, or having other issues?
The most likely issue is that you used a different email address than your 
Apple ID to sign up for the beta, or a new preview build was published after
your invite was sent.  

For any issues related to accessing builds on TestFlight, please 
[Contact Us](https://xogot.com/contact-us) and provide the email
address associated with your Apple account.

## How do I change the language of Xogot?

Xogot uses the language that the operating system selects for the app. You
cannot change the language in Xogot.

On iPhone or iPad:

1. Open **Settings**.
2. Select **Apps → Xogot → Language**.
3. Select a language.

On Mac:

1. Open **System Settings**.
2. Select **General → Language & Region**.
3. In the **Applications** section, click the add (**+**) button.
4. Select **Xogot**, select a language, and click **Add**.

If Xogot is already in the **Applications** list, select a language from the
menu next to Xogot. Close and reopen Xogot to apply the change.

If you find problems with the localization, please reach out to
support@xibbon.com
