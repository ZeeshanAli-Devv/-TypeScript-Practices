/* 📗 Day 4 – Enums (10 Questions) */
// 1️⃣ Ek enum Direction banao jisme 4 values ho — Up, Down, Left, Right. Usme se ek value print karo.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var checkDirection = Direction.Down;
console.log(checkDirection);
// 2️⃣ Ek enum Status banao jisme "Success", "Failure", aur "Pending" string values ho. "Success" ko print karo.
var Status;
(function (Status) {
    Status[Status["Success"] = 0] = "Success";
    Status[Status["Failure"] = 1] = "Failure";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
var checkStatus = Status.Success;
console.log(checkStatus);
// 3️⃣ Ek function getAccessLevel likho jo ek enum UserRole (Admin, User, Guest) accept kare aur return kare:
// Admin → "Full Access"
// User → "Limited Access"
// Guest → "Read Only"
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["Guest"] = 2] = "Guest";
})(UserRole || (UserRole = {}));
function getAccessLevel(userRole) {
    if (userRole === UserRole.Admin) {
        return "Full Access";
    }
    else if (userRole === UserRole.Guest) {
        return "Limited Access";
    }
    else {
        return "Read Only";
    }
}
console.log(getAccessLevel(UserRole.Admin));
// 4️⃣ Ek enum Days banao jisme Monday = 1, Tuesday = 2 ... Sunday = 7 ho.
// Fir Tuesday print karo.
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
var checkDays = Days.Tuesday;
console.log(checkDays);
// 5️⃣ Ek enum ColorCode banao jisme Red = "#FF0000", Green = "#00FF00", Blue = "#0000FF" ho.
// Fir usme se Blue print karo.
var ColorCode;
(function (ColorCode) {
    ColorCode["red"] = "#FF0000";
    ColorCode["Green"] = "#00FF00";
    ColorCode["Blue"] = "#0000FF";
})(ColorCode || (ColorCode = {}));
var checkColorCode = ColorCode.Blue;
console.log(checkColorCode);
// 6️⃣ Ek function isWeekend likho jo enum Days se day number le aur return kare true agar wo Saturday(6) ya Sunday(7) ho.
function isWeekend(days) {
    if (days === Days.Saturday) {
        return true;
    }
    else if (days === Days.Sunday) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isWeekend(6));
// 7️⃣ Ek enum ResponseStatus banao jisme OK = 200, NOT_FOUND = 404, INTERNAL_ERROR = 500 ho.
// Fir ek variable me 404 assign karke usko print karo.
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["OK"] = 200] = "OK";
    ResponseStatus[ResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    ResponseStatus[ResponseStatus["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
})(ResponseStatus || (ResponseStatus = {}));
var checkResponseStatus = ResponseStatus.NOT_FOUND;
console.log(checkResponseStatus);
// 8️⃣ Ek enum OrderStatus banao jisme Placed, Shipped, Delivered, Cancelled ho.
// Fir ek function printOrderStatus likho jo current status print kare.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Placed"] = 0] = "Placed";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
var printOrderStatus = function (status) {
    if (status === OrderStatus.Delivered) {
        return "Your Order is Delivered";
    }
    else if (status === OrderStatus.Placed) {
        return "Your Order is Delivered";
    }
    else if (status === OrderStatus.Shipped) {
        return "Your Order is Shipped";
    }
    else {
        return "Your Order is Cancelled";
    }
};
console.log(printOrderStatus(OrderStatus.Cancelled));
var checkHttpMethod = 0 /* HttpMethod.GET */;
console.log(checkHttpMethod);
// 🔟 Ek enum Size banao jisme Small = "S", Medium = "M", Large = "L" ho.
// Fir ek function likho jo size ke hisab se message return kare:
// S → "Small selected"
// M → "Medium selected"
// L → "Large selected"
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
})(Size || (Size = {}));
var checkSizes = function (size) {
    if (size === Size.Small) {
        return "Small selected";
    }
    else if (size === Size.Medium) {
        return "Medium selected";
    }
    else {
        return "Large selected";
    }
};
console.log(checkSizes(Size.Large));
