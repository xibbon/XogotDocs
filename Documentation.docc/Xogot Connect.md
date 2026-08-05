# Xogot Connect

Xogot Connect lets you deploy and debug your Godot projects to Xogot running
on iPhone or iPad.

Xogot Connect is a Godot extension that bridges your desktop Godot editor on 
Windows, macOS, or Linux to Xogot running on iOS, enabling full remote debugging, 
live scene inspection, and even onscreen touch controls for quick gameplay testing.

> Xogot Connect is not included in Xogot’s free tier. Using it requires
> an active Xogot subscription or license on the paired iPhone or iPad.

@Image(source: "XogotConnectDebug.png", alt: "A screenshot of Godot debugging Kenney 3D Platformer Starter Kit debugging to iPhone using Xogot Connect")

---

## Installing Xogot Connect
You can install Xogot Connect directly from the **Godot Asset Library**, or
manually from GitHub.

### Option 1: Install from the Asset Library

@Image(source: "XogotConnectAsset.png", alt: "A screenshot of Xogot Connect in the Godot Asset Library")

1. In Godot, open the **AssetLib** tab.
2. Search for **Xogot Connect**.
3. Click **Download**, then **Install**.

### Option 2: Manual Installation

If you prefer, you can install the addon directly from GitHub: 👉
[https://github.com/xibbon-projects/xogot_remote_debugger](https://github.com/xibbon-projects/xogot_remote_debugger)

1. Copy the `xogot_connect` folder into your project’s `addons` directory:

   ```
   your_project/
   └── addons/
       └── xogot_connect/
   ```

## Enable the Xogot Connect Plugin in Godot

@Image(source: "GodotPluginSettings.png", alt: "A screenshot of Godot's Project Settings > Plugins showing Xogot Connect enabled")

In Godot, go to **Project Settings → Plugins** and check the box to **enable** 
the plugin.

---

## Configuring Xogot Connect in Godot

Once enabled, a new **Xogot** pane will appear on the right side of the editor,
alongside **Inspector**, **Node**, and **History**.

1. **Open the Xogot pane.** Click the **Xogot** tab in the right-hand panel.
2. **Sign in to your Xogot account.**

   * Click **Sign In**. Your browser will open to the Xogot website.
   * Sign in using the same Xogot account you use on your iPhone or iPad.
   * Copy your API key from your Xogot profile.
3. **Paste your API key** into the **API Key** field in Godot where it says
   *“Paste your API Key.”*
4. Click **Submit** to complete setup.
5. You can now click **Enable** to begin searching for remote Xogot devices on your network

@Image(source: "GodotDeviceList.png", alt: "A screenshot of the Xogot pane in Godot showing a discovered Xogot device")

You can:

* **Search for devices** running Xogot automatically, or
* **Manually add** a device by entering its IP address and port.

---

## Configuring Xogot on iPhone or iPad

@Image(source: "iPhoneRemoteWaiting.png", alt: "A screenshot of Xogot on iPhone open to the Remote tab and waiting for connection")

1. **Open Xogot** on your iPhone or iPad.
2. Switch to the **Remote** tab.
3. Make sure you’re signed in to the **same Xogot account** used in Godot.
4. Tap **Make Discoverable**.

   * If prompted, grant Xogot permission to access your **Local Network**.
   * The Remote tab will display *“Waiting for connection”* and show your
     device’s **name, IP address, and port**.

Your device is now ready to debug a project from Godot.

---

## Launching Your Game from Godot

@Image(source: "GodotRemoteDeployButton.png", alt: "A screenshot of the Remote Deploy button in the Godot toolbar")

Once your iPhone or iPad appears in the device list (or has been added
manually):

1. Click the **Remote Deploy** button in Godot’s toolbar (to the right of Play,
   Pause, and Stop).
2. Your project will build and launch automatically on the paired iOS device.

While your game is running:

* Use **Pause** and **Stop** as you would in a local debug session.
* Breakpoints trigger normally.
* You can inspect and modify node properties in the **Remote** Scene Tree tab to
  see changes live.

---

## Enabling Onscreen Controls

@Image(source: "GodotVirtualControllerSettings.png", alt: "A screenshot of Godot Project Settings showing Xogot Virtual Controller enabled")

Enabling the Xogot Connect addon also adds new project settings for touch-based
controls.

To enable them:

1. Open **Project Settings → General → Input Devices → Virtual Controller**.
2. Check **Enable Virtual Controller**.

Now, when you launch your game on Xogot, it will display **onscreen touch
controls** automatically — perfect for projects that already support Bluetooth
controllers.
       
@Image(source: "FPSOnscreenControls.png", alt: "A screenshot of Kenney FPS Starter Kit running with onscreen controls")

---

## Troubleshooting

If your iOS device isn’t detected:

* Verify that both Godot and Xogot are signed into the same account.
* Ensure **Local Network** access is enabled for Xogot in the iOS **Settings**
  app.
* Confirm both devices are on the same Wi-Fi network.
* Try manually entering the device’s IP address and port.

---

## Learn More

* [Download Xogot on the App
  Store](https://apps.apple.com/us/app/xogot-make-games-anywhere/id6469385251)
* [View Xogot Connect on
  GitHub](https://github.com/xibbon-projects/xogot_remote_debugger)
* [Xogot Remote Debugging (iOS-to-iOS)](doc:Remote-Debugging)
