# Chunithm (International) Score Viewer

A bookmarklet tool let you to view the records of [CHUNITHM-NET (International)](https://chunithm-net-eng.com/) in rating order.

Chart constant data extracted from [chunirec](https://developer.chunirec.net/docs/v2.0/).

# Change Log
- 14 Jun 2022: Add local chart constant
    - Using data from: https://docs.google.com/spreadsheets/d/1m9BXU3D8rD4qYPn4YrxnzI3-2NydDwB-GTs1h88UX-U/
    - As Chunithm New Internation Ver. is supposed to be using the chart constant of Chunithm New instead of Chunithm New Plus, the chart constant from the google spreadsheet would have priority over chart constant from chunirec.
- 2 Jun 2022: Support Chunithm New
    - Update chart constant to Chunithm New
    - Support Ulitma (Not tested yet as I have not played any Ultima song yet, would try later)
    - Update rating calculation (add support on SSS+ rating)
    - Remove full record fetch (as it is useless)
    - Add FC/AJ result

# Usage

1. Drag [chuni intl viewer](https://github.com/kyroslee/chuni_intl_viewer) to your bookmark bar.
2. Edit the bookmark. Copy the following code and paste it as the url of the bookmark
```
javascript:(function(d,s){s=d.createElement('script');s.src='https://cdn.jsdelivr.net/gh/kyroslee/chuni_intl_viewer/main.min.js?'+Date.now();d.getElementsByTagName('head')[0].appendChild(s);})(document);

```
4. Open https://chunithm-net-eng.com/ and run the bookmarklet
5. Wait for the program to finish

# Dev

1. `npm install`
2. `npm run generate-constant` (if you need to test for local constant)
3. `npm run build`

# Tips
- If you want to run the bookmarklet on mobile chrome, type the name of the bookmark at url bar, and then click on the bookmark to execute the code.
- [How can a bookmarklet be ADDED on mobile Chrome without copying and pasting? - Android Enthusiasts Stack Exchange](https://android.stackexchange.com/questions/159308/how-can-a-bookmarklet-be-added-on-mobile-chrome-without-copying-and-pasting)
