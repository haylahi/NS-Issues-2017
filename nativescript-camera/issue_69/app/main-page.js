"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var nativescript_camera_1 = require("nativescript-camera");
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    nativescript_camera_1.requestPermissions();
}
exports.navigatingTo = navigatingTo;
function takePhoto() {
    var options = { width: 100, height: 100, keepAspectRatio: false, saveToGallery: false };
    nativescript_camera_1.takePicture(options)
        .then(function (picture) {
        console.log("ok");
        //this.cameraImageSrc = picture;
        //this.searchItemsbyPicture(picture);
    }).catch(function (err) {
        console.log("Error -> " + err.message);
    });
}
exports.takePhoto = takePhoto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBQ3BELDJEQUFxRTtBQUVyRSxzQkFBNkIsSUFBZTtJQUV4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFFNUMsd0NBQWtCLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBTkQsb0NBTUM7QUFFRDtJQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3hGLGlDQUFXLENBQUUsT0FBTyxDQUFFO1NBQ2pCLElBQUksQ0FBRSxVQUFBLE9BQU87UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLGdDQUFnQztRQUNoQyxxQ0FBcUM7SUFDekMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCw4QkFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5pbXBvcnQgeyB0YWtlUGljdHVyZSwgcmVxdWVzdFBlcm1pc3Npb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhlbGxvV29ybGRNb2RlbCgpO1xuXG4gICAgcmVxdWVzdFBlcm1pc3Npb25zKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWtlUGhvdG8oKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBrZWVwQXNwZWN0UmF0aW86IGZhbHNlLCBzYXZlVG9HYWxsZXJ5OiBmYWxzZSB9O1xuICAgIHRha2VQaWN0dXJlKCBvcHRpb25zIClcbiAgICAgICAgLnRoZW4oIHBpY3R1cmUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKVxuICAgICAgICAgICAgLy90aGlzLmNhbWVyYUltYWdlU3JjID0gcGljdHVyZTtcbiAgICAgICAgICAgIC8vdGhpcy5zZWFyY2hJdGVtc2J5UGljdHVyZShwaWN0dXJlKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgIH0pO1xufSJdfQ==