"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils/utils");
var states = ["unknown", "start", "change", "end"];
var item;
var statusLbl;
var density;
var prevDeltaX;
var prevDeltaY;
var startScale = 1;
function pageLoaded(args) {
    console.log("page loaded");
    var page = args.object;
    item = page.getViewById("item");
    statusLbl = page.getViewById("status");
    density = utils.layout.getDisplayDensity();
    item.translateX = 0;
    item.translateY = 0;
    item.scaleX = 1;
    item.scaleY = 1;
    updateStatus();
}
exports.pageLoaded = pageLoaded;
function onPan(args) {
    console.log("PAN[" + states[args.state] + "] deltaX: " + Math.round(args.deltaX) + " deltaY: " + Math.round(args.deltaY));
    if (args.state === 1) {
        prevDeltaX = 0;
        prevDeltaY = 0;
    }
    else if (args.state === 2) {
        item.translateX += args.deltaX - prevDeltaX;
        item.translateY += args.deltaY - prevDeltaY;
        prevDeltaX = args.deltaX;
        prevDeltaY = args.deltaY;
    }
    updateStatus();
}
exports.onPan = onPan;
function onPinch(args) {
    console.log("PINCH[" + states[args.state] + "] scale: " + args.scale + " focusX: " + args.getFocusX() + " focusY: " + args.getFocusY());
    if (args.state === 1) {
        var newOriginX = args.getFocusX() - item.translateX;
        var newOriginY = args.getFocusY() - item.translateY;
        var oldOriginX = item.originX * item.getMeasuredWidth();
        var oldOriginY = item.originY * item.getMeasuredHeight();
        item.translateX += (oldOriginX - newOriginX) * (1 - item.scaleX);
        item.translateY += (oldOriginY - newOriginY) * (1 - item.scaleY);
        item.originX = newOriginX / item.getMeasuredWidth();
        item.originY = newOriginY / item.getMeasuredHeight();
        startScale = item.scaleX;
    }
    else if (args.scale && args.scale !== 1) {
        var newScale = startScale * args.scale;
        newScale = Math.min(8, newScale);
        newScale = Math.max(0.125, newScale);
        item.scaleX = newScale;
        item.scaleY = newScale;
    }
}
exports.onPinch = onPinch;
function onDoubleTap(args) {
    console.log("DOUBLETAP");
    item.animate({
        translate: { x: 0, y: 0 },
        scale: { x: 1, y: 1 },
        curve: "easeOut",
        duration: 300
    }).then(function () {
        updateStatus();
    });
    updateStatus();
}
exports.onDoubleTap = onDoubleTap;
function updateStatus() {
    var text = "translate: [" + Math.round(item.translateX) + ", " + Math.round(item.translateY) + "]" +
        "\nscale: [" + (Math.round(item.scaleX * 100) / 100) + ", " + (Math.round(item.scaleY * 100) / 100) + "]" +
        "\norigin: [" + Math.round(item.originX * item.getMeasuredWidth()) + ", " + Math.round(item.originY * item.getMeasuredHeight()) + "]";
    statusLbl.text = text;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsbUNBQXFDO0FBR3JDLElBQUksTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFbkQsSUFBSSxJQUFVLENBQUM7QUFDZixJQUFJLFNBQWdCLENBQUM7QUFFckIsSUFBSSxPQUFlLENBQUM7QUFDcEIsSUFBSSxVQUFrQixDQUFDO0FBQ3ZCLElBQUksVUFBa0IsQ0FBQztBQUN2QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFFbkIsb0JBQTJCLElBQUk7SUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFaEIsWUFBWSxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQWRELGdDQWNDO0FBRUQsZUFBc0IsSUFBeUI7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxD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fSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSwgUGluY2hHZXN0dXJlRXZlbnREYXRhLCBQYW5HZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5cbmxldCBzdGF0ZXMgPSBbXCJ1bmtub3duXCIsIFwic3RhcnRcIiwgXCJjaGFuZ2VcIiwgXCJlbmRcIl07XG5cbmxldCBpdGVtOiBWaWV3O1xubGV0IHN0YXR1c0xibDogTGFiZWw7XG5cbmxldCBkZW5zaXR5OiBudW1iZXI7XG5sZXQgcHJldkRlbHRhWDogbnVtYmVyO1xubGV0IHByZXZEZWx0YVk6IG51bWJlcjtcbmxldCBzdGFydFNjYWxlID0gMTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJncykge1xuXG4gICAgY29uc29sZS5sb2coXCJwYWdlIGxvYWRlZFwiKTtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgaXRlbSA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJpdGVtXCIpO1xuICAgIHN0YXR1c0xibCA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzdGF0dXNcIik7XG4gICAgZGVuc2l0eSA9IHV0aWxzLmxheW91dC5nZXREaXNwbGF5RGVuc2l0eSgpO1xuXG4gICAgaXRlbS50cmFuc2xhdGVYID0gMDtcbiAgICBpdGVtLnRyYW5zbGF0ZVkgPSAwO1xuICAgIGl0ZW0uc2NhbGVYID0gMTtcbiAgICBpdGVtLnNjYWxlWSA9IDE7XG5cbiAgICB1cGRhdGVTdGF0dXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUGFuKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBBTltcIiArIHN0YXRlc1thcmdzLnN0YXRlXSArIFwiXSBkZWx0YVg6IFwiICsgTWF0aC5yb3VuZChhcmdzLmRlbHRhWCkgKyBcIiBkZWx0YVk6IFwiICsgTWF0aC5yb3VuZChhcmdzLmRlbHRhWSkpO1xuXG4gICAgaWYgKGFyZ3Muc3RhdGUgPT09IDEpIHtcbiAgICAgICAgcHJldkRlbHRhWCA9IDA7XG4gICAgICAgIHByZXZEZWx0YVkgPSAwO1xuICAgIH0gZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMikge1xuICAgICAgICBpdGVtLnRyYW5zbGF0ZVggKz0gYXJncy5kZWx0YVggLSBwcmV2RGVsdGFYO1xuICAgICAgICBpdGVtLnRyYW5zbGF0ZVkgKz0gYXJncy5kZWx0YVkgLSBwcmV2RGVsdGFZO1xuXG4gICAgICAgIHByZXZEZWx0YVggPSBhcmdzLmRlbHRhWDtcbiAgICAgICAgcHJldkRlbHRhWSA9IGFyZ3MuZGVsdGFZO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXR1cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25QaW5jaChhcmdzOiBQaW5jaEdlc3R1cmVFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBJTkNIW1wiICsgc3RhdGVzW2FyZ3Muc3RhdGVdICsgXCJdIHNjYWxlOiBcIiArIGFyZ3Muc2NhbGUgKyBcIiBmb2N1c1g6IFwiICsgYXJncy5nZXRGb2N1c1goKSArIFwiIGZvY3VzWTogXCIgKyBhcmdzLmdldEZvY3VzWSgpKTtcblxuICAgIGlmIChhcmdzLnN0YXRlID09PSAxKSB7XG4gICAgICAgIGNvbnN0IG5ld09yaWdpblggPSBhcmdzLmdldEZvY3VzWCgpIC0gaXRlbS50cmFuc2xhdGVYO1xuICAgICAgICBjb25zdCBuZXdPcmlnaW5ZID0gYXJncy5nZXRGb2N1c1koKSAtIGl0ZW0udHJhbnNsYXRlWTtcblxuICAgICAgICBjb25zdCBvbGRPcmlnaW5YID0gaXRlbS5vcmlnaW5YICogaXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IG9sZE9yaWdpblkgPSBpdGVtLm9yaWdpblkgKiBpdGVtLmdldE1lYXN1cmVkSGVpZ2h0KCk7XG5cbiAgICAgICAgaXRlbS50cmFuc2xhdGVYICs9IChvbGRPcmlnaW5YIC0gbmV3T3JpZ2luWCkgKiAoMSAtIGl0ZW0uc2NhbGVYKTtcbiAgICAgICAgaXRlbS50cmFuc2xhdGVZICs9IChvbGRPcmlnaW5ZIC0gbmV3T3JpZ2luWSkgKiAoMSAtIGl0ZW0uc2NhbGVZKTtcblxuICAgICAgICBpdGVtLm9yaWdpblggPSBuZXdPcmlnaW5YIC8gaXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIGl0ZW0ub3JpZ2luWSA9IG5ld09yaWdpblkgLyBpdGVtLmdldE1lYXN1cmVkSGVpZ2h0KCk7XG5cbiAgICAgICAgc3RhcnRTY2FsZSA9IGl0ZW0uc2NhbGVYO1xuICAgIH0gZWxzZSBpZiAoYXJncy5zY2FsZSAmJiBhcmdzLnNjYWxlICE9PSAxKSB7XG4gICAgICAgIGxldCBuZXdTY2FsZSA9IHN0YXJ0U2NhbGUgKiBhcmdzLnNjYWxlO1xuICAgICAgICBuZXdTY2FsZSA9IE1hdGgubWluKDgsIG5ld1NjYWxlKTtcbiAgICAgICAgbmV3U2NhbGUgPSBNYXRoLm1heCgwLjEyNSwgbmV3U2NhbGUpO1xuXG4gICAgICAgIGl0ZW0uc2NhbGVYID0gbmV3U2NhbGU7XG4gICAgICAgIGl0ZW0uc2NhbGVZID0gbmV3U2NhbGU7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Eb3VibGVUYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiRE9VQkxFVEFQXCIpO1xuXG4gICAgaXRlbS5hbmltYXRlKHtcbiAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxuICAgICAgICBjdXJ2ZTogXCJlYXNlT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBkYXRlU3RhdHVzKCk7XG4gICAgfSk7XG5cbiAgICB1cGRhdGVTdGF0dXMoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhdHVzKCkge1xuICAgIGNvbnN0IHRleHQgPSBcInRyYW5zbGF0ZTogW1wiICsgTWF0aC5yb3VuZChpdGVtLnRyYW5zbGF0ZVgpICsgXCIsIFwiICsgTWF0aC5yb3VuZChpdGVtLnRyYW5zbGF0ZVkpICsgXCJdXCIgK1xuICAgICAgICBcIlxcbnNjYWxlOiBbXCIgKyAoTWF0aC5yb3VuZChpdGVtLnNjYWxlWCAqIDEwMCkgLyAxMDApICsgXCIsIFwiICsgKE1hdGgucm91bmQoaXRlbS5zY2FsZVkgKiAxMDApIC8gMTAwKSArIFwiXVwiICtcbiAgICAgICAgXCJcXG5vcmlnaW46IFtcIiArIE1hdGgucm91bmQoaXRlbS5vcmlnaW5YICogaXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkpICsgXCIsIFwiICsgTWF0aC5yb3VuZChpdGVtLm9yaWdpblkgKiBpdGVtLmdldE1lYXN1cmVkSGVpZ2h0KCkpICsgXCJdXCI7XG5cbiAgICBzdGF0dXNMYmwudGV4dCA9IHRleHQ7XG59Il19