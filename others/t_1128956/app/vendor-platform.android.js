require("application");
if (!global["__snapshot"]) {
    // In case snapshot generation is enabled these modules will get into the bundle
    // but will not be required/evaluated.
    // The snapshot webpack plugin will add them to the tns-java-classes.js bundle file.
    // This way, they will be evaluated on app start as early as possible.
    require("ui/frame");
    require("ui/frame/activity");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXBsYXRmb3JtLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItcGxhdGZvcm0uYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLGdGQUFnRjtJQUNoRixzQ0FBc0M7SUFDdEMsb0ZBQW9GO0lBQ3BGLHNFQUFzRTtJQUV6RSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcclxuaWYgKCFnbG9iYWxbXCJfX3NuYXBzaG90XCJdKSB7XHJcbiAgICAvLyBJbiBjYXNlIHNuYXBzaG90IGdlbmVyYXRpb24gaXMgZW5hYmxlZCB0aGVzZSBtb2R1bGVzIHdpbGwgZ2V0IGludG8gdGhlIGJ1bmRsZVxyXG4gICAgLy8gYnV0IHdpbGwgbm90IGJlIHJlcXVpcmVkL2V2YWx1YXRlZC5cclxuICAgIC8vIFRoZSBzbmFwc2hvdCB3ZWJwYWNrIHBsdWdpbiB3aWxsIGFkZCB0aGVtIHRvIHRoZSB0bnMtamF2YS1jbGFzc2VzLmpzIGJ1bmRsZSBmaWxlLlxyXG4gICAgLy8gVGhpcyB3YXksIHRoZXkgd2lsbCBiZSBldmFsdWF0ZWQgb24gYXBwIHN0YXJ0IGFzIGVhcmx5IGFzIHBvc3NpYmxlLlxyXG5cclxuXHRyZXF1aXJlKFwidWkvZnJhbWVcIik7XHJcblx0cmVxdWlyZShcInVpL2ZyYW1lL2FjdGl2aXR5XCIpO1xyXG59XHJcbiJdfQ==