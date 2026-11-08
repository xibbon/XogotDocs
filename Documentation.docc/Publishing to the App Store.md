# Publishing to the App Store

Export your game from Xogot for Mac and upload it to App Store Connect for
TestFlight and App Store release.

## Overview

Xogot for Mac can export a store-signed package and send it directly to App
Store Connect. Xogot uses the Apple `altool` command from Xcode for the upload,
so Xcode must be installed. You do not have to open Xcode or Transporter.

You can publish these packages:

| Platform | Package | Export preset setting |
| --- | --- | --- |
| iPhone and iPad | **Apple Archive (IPA)** | **Apple Signing > Release** set to **App Store** |
| Mac | **PKG** | **Distribution > Distribution Type** set to **App Store** |

For all other export types, Xogot saves the package to a folder only.

To publish, you must have:

- A paid Apple Developer Program membership. A free Apple ID gets a personal
  team only. With a personal team, you cannot publish, and certificates expire
  after 7 days.
- An app record in App Store Connect with the same bundle identifier as your
  export preset.
- An App Store Connect API key in **Signing Setup**. Xogot uses this key to sign
  and to upload.

After the upload, App Store Connect processes the build. When processing is
complete, the build is available in TestFlight. You then submit it for App
Store review in App Store Connect.

## Set up signing

Do this procedure one time on each Mac.

1. In the deployment target menu in the toolbar, select **Signing Setup**. If
   the menu item shows a warning sign, signing is not configured.
2. In the **Apple Developer Account** section, select one of these options:
   - **Set it up for me**: Xogot creates the API key for you. Refer to
     <doc:Publishing-to-the-App-Store#Let-Xogot-create-the-API-key>.
   - **Set up manually**: You create the API key in App Store Connect. Refer to
     <doc:Publishing-to-the-App-Store#Create-the-API-key-manually>.

@Image(source: signing-setup-methods.png, alt: "The Signing Setup dialog with the Set it up for me and Set up manually buttons.")

For a step-by-step version of this procedure, refer to the
<doc:01.signing_setup> tutorial.

Xogot keeps the private key in the macOS Keychain. Xogot does not send the
private key to Xibbon or to other services. Xogot gives the key only to Apple
tools on your Mac for signing and upload.

### Let Xogot create the API key

1. Select **Set it up for me**.
2. Read the message and select **Continue**. Xogot opens the Apple sign-in page
   in a private browser session.
3. Sign in to App Store Connect with your Apple Developer account. You enter
   your password directly on the Apple website.
4. Wait while Xogot shows "Creating the API key in App Store Connect".

@Image(source: signing-setup-automatic-signin.png, alt: "The App Store Connect sign-in page in the Xogot private browser session.")

Xogot creates a team API key, and gets the Key ID, the private key and the
Issuer ID. Xogot then discards the browser session and keeps only the API key.

If Xogot cannot get all the values, it shows the manual steps. Complete the
steps that are not done.

> Note: To create a team API key, your Apple Developer account must have the
> Admin role (or be the Account Holder).

### Create the API key manually

1. **Open App Store Connect.** Select **Open App Store Connect**, or go to
   [appstoreconnect.apple.com/access/integrations/api](https://appstoreconnect.apple.com/access/integrations/api).
   Navigate to **Users and Access > Integrations > App Store Connect API > Team
   Keys**.
2. **Generate an API key.** Click the **+** button. Type `Xogot` for the name.
   For **Access**, select **Admin**. Click **Generate**.
3. **Download and import the key.** Click **Download** for the new key. In
   Xogot, select **Import Key…** and select the `AuthKey_<KeyID>.p8` file from
   your Downloads folder. You can also copy the key text and select **Paste**.
   Xogot reads the Key ID from the file name. If the file name does not contain
   the Key ID, type the Key ID from the key row in App Store Connect.
4. **Copy the Issuer ID.** In App Store Connect, click **Copy** next to
   **Issuer ID** at the top of the same page. Paste it into the **Issuer ID**
   field in Xogot.
5. Select **Save**.

@Image(source: signing-setup-manual-import.png, alt: "Steps 3 and 4 of the manual setup, with the Import Key and Issuer ID controls.")

> Important: App Store Connect lets you download the `.p8` file one time only.
> Keep it in a safe location.

When the setup is complete, the **Status** section shows "App Store Connect API
key configured" with the Key ID and the Issuer ID.

### Select the team

If your Apple ID is a member of more than one team, select the team in the
**Team** section. **Automatic** uses the default team of the API key.

## Configure the export preset

1. Select **Project > Export…** to open the export presets.
2. Add an iOS or macOS preset with **Add Export Preset**, or select an existing
   preset. Then select **Options** below the preset.
3. In the **Application** section, set **Bundle Identifier** to the identifier
   of your app in App Store Connect.
4. Set the distribution method:
   - **iOS**: in the **Apple Signing** section, set **Release** to **App Store**.
   - **macOS**: in the **Distribution** section, set **Distribution Type** to
     **App Store**.
5. Increase **Build Number** for each upload. App Store Connect does not accept
   a build number that it received before.

@Image(source: export-preset-ios.png, alt: "The iOS export preset options. Apple Signing Release is set to App Store.")

App Store distribution on Mac needs more settings in the **macOS Signing** and
**App Sandbox** sections. Xogot shows a warning next to each setting that is
not correct:

- **Code Signing**: **Xcode codesign**. Ad-hoc signing is not supported.
- **Team ID**: your Apple Developer team.
- **Provisioning Profile**: a Mac App Store profile for the bundle identifier.
- **Installer Identity**: your Mac installer distribution identity.
- **Enable App Sandbox**: on.

@Image(source: export-preset-macos.png, alt: "The macOS export preset options with warnings for the missing provisioning profile, installer identity and App Sandbox.")

For iOS, you can keep **Release Signing Identity** set to **Automatic**. Xogot
selects the correct identity:

- Without a provisioning profile, Xogot builds the archive with automatic
  signing and the Apple Development identity. Then Xogot signs it again for the
  export method.
- With a provisioning profile, Xogot uses Apple Development for the development
  method and Apple Distribution for all other methods.

If you type a signing identity that is not "Apple Development" or "Apple
Distribution", Xogot uses it with manual signing.

## Publish the package

1. Select **Project > Export Game** to open the export sheet.
2. For **Preset**, select the App Store preset.
3. For **Format**, select **Apple Archive (IPA)** for iOS or **PKG** for macOS.
   For an App Store package, the sheet shows the **Destination** picker.
4. Set **Destination** to **Upload to App Store Connect**. The **Export…**
   button changes to **Publish**.
5. Select **Publish**.

@Image(source: export-destination-menu.png, alt: "The export sheet with the Destination menu open, showing Save to Folder and Upload to App Store Connect.")

If the **Validation** section shows errors, **Publish** is not available.
Correct the errors first. For example, install the iOS export template with
**Manage Templates…**, or complete the macOS signing settings.

@Image(source: export-macos-validation.png, alt: "The export sheet for a macOS App Store preset, with validation errors for missing signing settings.")

Before the export starts, Xogot makes sure that an API key is in Signing Setup.
If there is no key, set up signing first. Refer to <doc:Publishing-to-the-App-Store#Set-up-signing>.

Xogot exports the package to a private folder and uploads it. The sheet shows
the upload stages and the quantity of data sent. You can select **Cancel** to
stop the upload.

When the upload is complete, the sheet shows "Uploaded to App Store Connect."
Xogot then deletes the private folder. Select **Done**.

### Save the package first

To keep a copy of the package, set **Destination** to **Save to Folder**, and
select **Export…**. When the export is complete, the sheet shows **Upload to App
Store Connect**. Select it to upload the saved package.

### If the upload fails

If the upload fails or you cancel it, Xogot keeps the package. The sheet shows
the location of the package and the error from App Store Connect. Correct the
problem and select **Upload to App Store Connect** again. You do not have to
export again.

Common errors:

| Error | Correction |
| --- | --- |
| "Add an App Store Connect API key in Signing Setup before uploading." | Set up signing. Refer to <doc:Publishing-to-the-App-Store#Set-up-signing>. |
| The bundle identifier is not found | Create the app record in App Store Connect with the same bundle identifier. |
| The bundle version was used before | Increase the build number in the export preset, then export again. |
| The key does not have permission | Use a team key with the Admin or App Manager role. |

## Topics

### Related

- <doc:Differences-Mac>
- <doc:01.signing_setup>
