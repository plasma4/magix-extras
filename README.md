# Magix Extras
### Some mods may require or work better with Magix.
They have been made to work along with the fixed version of Magix, which you can figure out how to install over [here](https://github.com/plasma4/magix-fix/blob/main/README.md). The original creator, pelletsstarPL, has abandoned Magix and these Magix mods for the time being.

## Normal installation
**In order to install these Magix mods, use the links below:**

Magix Market (import *both* links, however, if you wish to add this without Magix, only import the first one):
```
https://brunosupremo.github.io/market_mod/market_mod.js
https://plasma4.github.io/magix-extras/MagixMarketUtils.js
```
Thot Mod (does not require Magix):
```
https://plasma4.github.io/magix-extras/thot.js
```
Coal Mod (does not require Magix):
```
https://brunosupremo.github.io/coal-mod/coal_mod.js
```
Laws of Food Mod (does not require Magix):
```
https://adrthegamedev.github.io/LawsOfFood/lawsoffood.js
```
Laws of Food Mod but with no influence cost (does not require Magix, but has the functionality of Don't Eat Herbs):
```
https://adrthegamedev.github.io/LawsOfFood/lawsoffoodfree.js
```
Don't Eat Herbs (does not require Magix):
```
https://therealohead.github.io/neverending-legacy-mods/mods/dont-eat-herbs.js
```
### NOTE: I, plasma4 (Leo Zhang/@1_e0) was NOT the original creator of these mods.
## Injecting a mod without wiping the save
In order to inject a mod into a game that **is already in progress**, run the following script:
```js
G.mods.push({url:"LINK_HERE"});G.Save();location.reload()
```
Simply replace `LINK_HERE` with the link that you want to use. If you need to import multiple links at the same time, you can run this script several times in the same order, changing the link each time you run the script.
## Installation instructions for local development/playing
You may install the local version of magix-fix [here](https://github.com/plasma4/magix-fix/archive/refs/heads/main.zip) (or, if you have already installed it, you can skip this step). Be sure to extract the .zip file to make sure things work properly!

You have two options:
- Install these mods through links
- Install these mods by locally copying them over

To get them installed through links, you can do it in a similar fashion. Click on Use Magix, add the link or links at the end, and copy all of the text **without deleting the original 2 Magix files**. You'll need to reload the page in order to actually install them; you can't just simply Load Mods.

However, to locally copy them over, you'll need to manually get the sprite sheet out and download the files from the links. Then, you can import it directly (without the starting part of the url, so, for example, the Thot mod would just become `thot.js` when imported).