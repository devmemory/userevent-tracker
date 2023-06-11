# userevent_tracker
- This library is to track users' events. You can use this library not only react, but also svelte, etc.

## What data you can get
- [time] : time in milliseconds
- [action] : click, load, unload
- [target] : element name, view
- [url] : location.pathname
- [referrer] : document.referrer
- [os] : mac, window, linux, etc
- [browserInfo] : chrome, safari, firebox, etc
- [data] : title attr, img alt, btn name
- [uuid] : random or you can set whatever you want

## Where it is stored
- Currently, it stores in localstorage.
- I'm willing to change it, if it's needed.

## How to use
1. import tracker and use in something like useEffect in React, onMount in Svelte.

```
import { tracker } from 'userevent_tracker'

useEffect(() => {
    // [showConsole] show console if it works fine or no.(Default : false)
    // [customUUID] You can track a specific user with this.(Default : random id)
    tracker({showConsole: true, customUUID: "what you want"})
}, []);
```

2. Declare what kind of data you want to store.
- **img** tag will store **alt**
- **button** tag will save **innerText**
- if you set **track** or **btn** in your class name, it'll save **innerText** except when you set **title**
```
    <!-- content will be stored -->
    <div className="div_btn">
        content
    </div>

    <!-- title will be stored -->
    <div className="div_track" title="title">
        content
    </div>
```

3. You can get, clear data whenever you want through storeUtil.
```
import { storeUtil } from 'userevent_tracker'

// get tracked data(type: EventModel[])
storeUtil.getTrackData()

// This will clear userevent data in localstorage
storeUtil.clearTrackData()
```

4. You can do whatever you want with this data.