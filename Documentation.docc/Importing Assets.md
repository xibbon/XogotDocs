# Importing Assets

Bring sprites, textures, sounds, or 3D models into Xogot

Xogot makes it easy to import game assets directly on your iPad or iPhone. 
Whether you're working with **sprites, textures, sounds, or 3D models** created in other 
mobile apps or downloaded from the web (such as **TurboSquid** and other game asset
repositories), this guide will help you bring your assets into Xogot projects smoothly.  

## Save to Files App

The first step to importing files into a Xogot project is saving the asset to the **Files App**:

1. **Open the app** that contains your asset (e.g., Procreate, Safari, Uniform).
2. Tap the **“Share” icon** and choose **“Save to Files”**.

@Image(source: "ProcreateShare.png",
       alt: "A screenshot of sharing from Procreate")

3. You can either save the asset **directly to your Xogot project folder** or save it to another well-known location, such as **“Downloads”**, for importing later.

## Importing Files from Within Xogot

Xogot provides a straightforward way to import assets through its **File Pad**:

1. **Open Xogot** 
2. If the File Pad is not visible, you can open it by tapping on the **Folder** 
   button in the bottom-left corner of the app.
3. Check the path at the top of the File Pad.  This is the location where
   imported files will be saved.  If you'd like to import files to a different
   location, select a different folder in the File Pad.  
3. Tap the **“+” button** and choose **“Import Files”**.
3. Browse through the **Files App** to locate and select the assets you want to import.
4. Once imported, these files will become accessible in the File Pad, ready for
   use in your game scenes.  

## Drag and Drop Assets

Xogot supports **drag and drop** for importing assets, allowing for an intuitive workflow:

1. **Begin dragging the asset** in the Files App or another app that supports drag-and-drop (e.g., Photos).
2. **Switch to Xogot** by swiping up from the bottom of the screen and selecting the Xogot app while still holding the draggable item.
3. Once in Xogot, **drag the asset into the Files Pad**. Areas where the asset can be imported will show a **green “+” badge** on the asset.
4. Drop the file in the desired location, and it will be automatically added to your project.

### Running Xogot Side-By-Side with other iPad apps

1. **Open Xogot** on your iPad.
2. Tap the **three dots (“...”)** at the top of the Xogot app.
3. Select **“Split View”** from the options that appear.
4. Choose the **Files App** (or another app containing the asset) from the list of available apps to open it side-by-side with Xogot.
5. To ensure you have a target for dragging, tap the **Show sidebar button in the upper left** of the Xogot interface and ensure that the **Files Pad** is visible.

## Share to Xogot

Starting with Xogot 1.4.2, you can select the "Share" option in various content
creation applications and select Xogot as a target for sharing.   This will send
your asset to Xogot.

Then, launch Xogot, or switch back to Xogot, and you will be prompted about the
files that were shared and where you want to import them.

## Importing 3D Models

Xogot natively supports **.gltf** and **.obj** file formats for importing 3D models. When importing these models, it's essential to ensure that the support files are correctly placed:

- For **gltf models**, place the corresponding **.bin** file in the same folder as the **.gltf** file.
- For **obj models**, ensure that any **textures** associated with the model are stored in a **“textures”** folder, ideally located in the same directory as the **.obj** file.

This setup will allow Xogot to properly load and display your 3D models in your projects.

## Compatible Apps for Creating Assets

There are several excellent iPhone and iPad apps for creating assets compatible with Xogot:

- **[Nomad Sculpt](https://nomadsculpt.com)**: Sculpting and painting mobile application.
- **[Morphin](https://apps.apple.com/ca/app/morphin/id6642651792)**: Create, Rig, and Animate in 3D with ease.
- **[Pixquare](https://www.pixquare.art)**: Create pixel art assets and animations on the go.
- **Procreate**: Great for drawing and creating sprites and textures. Use the **Share** option to export images directly to Files.
- **GarageBand**: Perfect for creating and exporting sounds and background music for your game.
- **Affinity Designer/Photo**: Professional-grade vector and raster tools for creating game graphics.
- **[Uniform](https://sparseal.com/uniform/)**: A powerful 3D modeler that makes it easy to create and export models in formats like **gltf** and **obj**.

These apps, combined with Xogot’s easy importing process, can help you create high-quality 
game assets directly on your mobile device, making the development process smoother and 
more enjoyable.
