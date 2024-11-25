import { neuApiEndpoints } from "../globals.js"

export default async function endpoint_places(app) {





    app.get("/places", async (req,res)=> {

        const response = await fetch(neuApiEndpoints.general)
        const data = await response.json()

        const allPlaces = data.locations
        const usefulInfoAllPlaces = []
        
        allPlaces.forEach((ele)=> {
            const place = {
                name: ele.name,
                id: ele.id,
                type: 
                    ele.name === "Social House at Stetson West" || 
                    ele.name === "The Eatery at Stetson East" || 
                    ele.name === "United Table at International Village" ? 
                    "Dining Hall" : "Restaurant",

                open: ele.active,
                menu_shown: ele.show_menus,
                description: ele.short_description,

                payment_methods: {
                    cash: ele.pay_with_cash,
                    meal_plan: ele.pay_with_meal_plan,
                    dining_dollars: ele.pay_with_dining_dollars,
                    credit_card: ele.pay_with_cc,
                    google_pay: ele.pay_with_google_pay,
                    samsung_pay: ele.pay_with_samsung_pay,
                    apple_pay: ele.pay_with_apple_pay
                }
            }

            usefulInfoAllPlaces.push(place)
        })

        res.send(usefulInfoAllPlaces)
    })











}