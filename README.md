# arjs-image-recognition

You can test app : https://marcinkulwicki.github.io/pepsi-example/


Image : https://raw.githubusercontent.com/MarcinKulwicki/arjs-image-recognition/master/pepsi-example/pepsi.jpg



Recently AR.js was moved from https://github.com/jeromeetienne/AR.js to https://github.com/AR-js-org/AR.js . They add new functionality which is image recognition without dark frame surrounding marker. It is possible by using NFT.

Ok. At the beginning will be needed server. You can make it using Web Server for Chrome.
Caution: AR.js in not working on Chrome in iPhones. You need Android device with Chrome Browser.

Open in Chrome ```chrome://inspect/#devices``` Check Discover USB devices and setup Port forwarding to 127.0.0.1:5000

Connect you phone to pc in debugging mode and now you should able to see your device on the list. If not, unlock phone and Open Chrome. On PC Type 127.0.0.1:5000, click Open and Inspect. You will see new blank window. Unlock your phone and open Chrome. Here we go. We can start with AR.

At first, look at example and find a-nft block. There you can find reference to your image saved in specific format. This format is NFT, you need to generate this file from pepsi.jpg. Photo which i use. To generate you can use https://carnaux.github.io/NFT-Marker-Creator/.
After generating you will have three files ( pepsi.fset , pepsi.fset3, pepsi.iset ), copy it to your server in folder ‘lake-example’. Next copy file from example to this same folder and edit a-nft url to:
```
<a-nft type='nft' url='pepsi-example/pepsi' smooth='true' smoothCount='10' smoothTolerance='0.01' smoothThreshold='5'>
```
After this let’s find animated model https://github.com/KhronosGroup/glTF-Sample-Models. I Choose CesiumMan. Get CesiumMan.gltf and copy to ‘pepsi-example’. Edit index.html:
```
<script src="https://cdn.rawgit.com/donmccurdy/aframe-extras/cfe5f316/dist/aframe-extras.js"></script>
...
<a-entity
    gltf-model='CesiumMan.gltf'
    scale="100 100 100"
    position="150 450 0"
    animation-mixer
>
```
And that’s it.

You can use more than only 3d Object. For example:

https://aframe.io/docs/1.0.0/components/text.html

https://aframe.io/docs/1.0.0/primitives/a-image.html
