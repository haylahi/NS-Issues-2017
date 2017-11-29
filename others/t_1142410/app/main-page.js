"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var camera = require("nativescript-camera");
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    camera.requestPermissions();
}
exports.navigatingTo = navigatingTo;
function takePhoto() {
    camera.takePicture().then(function (res) {
        var imageAssset = res;
        console.log(imageAssset);
    });
}
exports.takePhoto = takePhoto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBRXBELDRDQUE4QztBQUU5QyxzQkFBNkIsSUFBZTtJQUN4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFFNUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDaEMsQ0FBQztBQUxELG9DQUtDO0FBRUQ7SUFDSSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztRQUN6QixJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFMRCw4QkFLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xyXG5cclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XHJcblxyXG4gICAgY2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFrZVBob3RvKCkge1xyXG4gICAgY2FtZXJhLnRha2VQaWN0dXJlKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxldCBpbWFnZUFzc3NldCA9IHJlcztcclxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZUFzc3NldClcclxuICAgIH0pXHJcbn0iXX0=