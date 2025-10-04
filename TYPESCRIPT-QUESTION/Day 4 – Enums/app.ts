/* 📗 Day 4 – Enums (10 Questions) */

// 1️⃣ Ek enum Direction banao jisme 4 values ho — Up, Down, Left, Right. Usme se ek value print karo.

enum Direction {
    Up,
    Down,
    Left,
    Right
}

const checkDirection: Direction = Direction.Down
console.log(checkDirection);

// 2️⃣ Ek enum Status banao jisme "Success", "Failure", aur "Pending" string values ho. "Success" ko print karo.

enum Status {
    Success,
    Failure,
    Pending
}

const checkStatus : Status = Status.Success
console.log(checkStatus);

// 3️⃣ Ek function getAccessLevel likho jo ek enum UserRole (Admin, User, Guest) accept kare aur return kare:

// Admin → "Full Access"

// User → "Limited Access"

// Guest → "Read Only"

enum UserRole {
    Admin,
    User,
    Guest
}

function getAccessLevel (userRole: UserRole) {
    if(userRole === UserRole.Admin)
    {
        return "Full Access"
    }
    else if(userRole === UserRole.Guest)
    {
        return "Limited Access"   
    }
    else{
        return "Read Only"
    }
}
console.log(getAccessLevel(UserRole.Admin))

// 4️⃣ Ek enum Days banao jisme Monday = 1, Tuesday = 2 ... Sunday = 7 ho.
// Fir Tuesday print karo.

enum Days {
    Monday      = 1,
    Tuesday     = 2,
    Wednesday   = 3,
    Thursday    = 4,
    Friday      = 5,
    Saturday    = 6,
    Sunday      = 7,
}

const checkDays : Days = Days.Tuesday
console.log(checkDays);

// 5️⃣ Ek enum ColorCode banao jisme Red = "#FF0000", Green = "#00FF00", Blue = "#0000FF" ho.
// Fir usme se Blue print karo.

enum ColorCode {
    red = "#FF0000", 
    Green = "#00FF00", 
    Blue = "#0000FF"
}

const checkColorCode : ColorCode = ColorCode.Blue
console.log(checkColorCode);

// 6️⃣ Ek function isWeekend likho jo enum Days se day number le aur return kare true agar wo Saturday(6) ya Sunday(7) ho.

function isWeekend (days: Days) {
    if(days === Days.Saturday)
    {
        return true
    }
    else if(days === Days.Sunday)
    {
        return true
    }
    else{
        return false
    }
}
console.log(isWeekend(6))

// 7️⃣ Ek enum ResponseStatus banao jisme OK = 200, NOT_FOUND = 404, INTERNAL_ERROR = 500 ho.
// Fir ek variable me 404 assign karke usko print karo.

enum ResponseStatus {
    OK = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500
}
const checkResponseStatus : ResponseStatus = ResponseStatus.NOT_FOUND
console.log(checkResponseStatus);

// 8️⃣ Ek enum OrderStatus banao jisme Placed, Shipped, Delivered, Cancelled ho.
// Fir ek function printOrderStatus likho jo current status print kare.

enum OrderStatus { Placed, Shipped, Delivered, Cancelled}

const printOrderStatus = (status: OrderStatus) =>{
    
    if(status === OrderStatus.Delivered)
    {
        return "Your Order is Delivered"
    }
    else if(status === OrderStatus.Placed){
        return "Your Order is Delivered"
    }
    else if(status === OrderStatus.Shipped){
        return "Your Order is Shipped"
    }
    else{
        return "Your Order is Cancelled"
    }
}

console.log(printOrderStatus(OrderStatus.Cancelled))

// 9️⃣ Ek constant enum HttpMethod banao jisme GET, POST, PUT, DELETE ho.
// Fir ek variable me HttpMethod.GET assign karke print karo.

const enum HttpMethod {GET, POST, PUT, DELETE}
const checkHttpMethod : HttpMethod = HttpMethod.GET
console.log(checkHttpMethod);



// 🔟 Ek enum Size banao jisme Small = "S", Medium = "M", Large = "L" ho.
// Fir ek function likho jo size ke hisab se message return kare:

// S → "Small selected"

// M → "Medium selected"

// L → "Large selected"

enum Size {
    Small = "S",
    Medium = "M",
    Large = "L"
}

const checkSizes = (size: Size): string => {
    
    if(size === Size.Small)
    {
       return "Small selected" 
    }
    else if(size === Size.Medium)
    {
       return "Medium selected" 
    }
    else{
        return "Large selected"
    }
}
console.log(checkSizes(Size.Large))