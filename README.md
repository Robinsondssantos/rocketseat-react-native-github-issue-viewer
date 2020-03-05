# rocketseat-react-native-github-issue-viewer


## Download and install Android Studio

## Create an AVD using Android Studio

## Export some environment variables or save in your .bashrc or .profile
```
user@computer:~$ export ANDROID_SDK=~/Android/Sdk
user@computer:~$ export PATH=$ANDROID_SDK/emulator:$ANDROID_SDK/tools:$PATH
```

## List the Android Virtual Devices on Linux (Ubuntu)
```
user@computer:~$ emulator -list-avds
Pixel_2_API_29
user@computer:~$
```

## Start Android emulator
```
user@computer:~$ emulator -avd Pixel_2_API_29
VK_VERSION_1_1 check failed: vkBindBufferMemory2 not found
VK_VERSION_1_1 check failed: vkBindImageMemory2 not found
VK_VERSION_1_1 check failed: vkGetDeviceGroupPeerMemoryFeatures not found
VK_VERSION_1_1 check failed: vkCmdSetDeviceMask not found
VK_VERSION_1_1 check failed: vkCmdDispatchBase not found
VK_VERSION_1_1 check failed: vkGetImageMemoryRequirements2 not found
VK_VERSION_1_1 check failed: vkGetBufferMemoryRequirements2 not found
VK_VERSION_1_1 check failed: vkGetImageSparseMemoryRequirements2 not found
VK_VERSION_1_1 check failed: vkTrimCommandPool not found
VK_VERSION_1_1 check failed: vkGetDeviceQueue2 not found
VK_VERSION_1_1 check failed: vkCreateSamplerYcbcrConversion not found
VK_VERSION_1_1 check failed: vkDestroySamplerYcbcrConversion not found
VK_VERSION_1_1 check failed: vkCreateDescriptorUpdateTemplate not found
VK_VERSION_1_1 check failed: vkDestroyDescriptorUpdateTemplate not found
VK_VERSION_1_1 check failed: vkUpdateDescriptorSetWithTemplate not found
VK_VERSION_1_1 check failed: vkGetDescriptorSetLayoutSupport not found
createOrGetGlobalVkEmulation: Warning: Vulkan 1.1 APIs missing from device
```

## Install dependencies
```
user@computer:~/my-super-react-app$ yarn
```

## Start the Metro Bundler
```
user@computer:~/my-super-react-app$ react-native start
```

## Install debug APP
```
user@computer:~/my-super-react-app$ react-native run-android
```

## Have fun!




