import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="img" src="https://media.istockphoto.com/id/1038355632/vector/hamburger-icon.jpg?s=612x612&w=0&k=20&c=0lwYqfJxkss5KKmDPAFZRJ9_2-z3h1tRAfFyAKpVEYU=" alt="logo" />
                <div className = "app-name">Namaste Gastronomy</div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// const resdata = {"info": {
//     "id": "662650",
//     "name": "Starbucks Coffee",
//     "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
//     "locality": "Uptown Square",
//     "areaName": "Whitefield - Hoskote Rd",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Beverages",
//       "Cafe",
//       "Snacks",
//       "Desserts",
//       "Bakery",
//       "Ice Cream"
//     ],
//     "avgRating": 4.5,
//     "parentId": "195515",
//     "avgRatingString": "4.5",
//     "totalRatingsString": "100+",
//     "sla": {
//       "deliveryTime": 33,
//       "lastMileTravel": 6.4,
//       "serviceability": "SERVICEABLE",
//       "slaString": "30-35 mins",
//       "lastMileTravelString": "6.4 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2024-04-03 23:00:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textExtendedBadges": {
          
//         },
//         "textBased": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "20% OFF",
//       "subHeader": "UPTO ₹50"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//       },
//       "freedelMessage": "FREE DELIVERY",
//       "exclusiveOfferMessage": "EXTRA 10% OFF",
//       "badgeType": "BADGE_TYPE_ONE_LITE"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
    
//   },
//   "cta": {
//     "link": "swiggy://menu?restaurant_id=662650",
//     "text": "RESTAURANT_MENU",
//     "type": "DEEPLINK"
//   }
// };

const resListOfObjs = [
    {
      "info": {
        "id": "45777",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
        "locality": "OLD MADRAS ROAD",
        "areaName": "Kr Puram",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.2,
        "parentId": "2120",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "promoted": true,
        "adTrackingId": "cid=12455653~p=1~adgrpid=12455653#ag1~mp=SWIGGY_IN~bl=FOOD~eid=92f60256-58a8-4ac4-9efc-5c4b7171f6ec~aet=RESTAURANT~aeid=45777~srvts=1712122984012",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 9.9,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "9.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Andhra.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Biryani.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Andhra.png",
                    "description": "Delivery!"
                  }
                },
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=45777",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "662650",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
        "locality": "Uptown Square",
        "areaName": "Whitefield - Hoskote Rd",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.5,
        "parentId": "195515",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 6.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": "EXTRA 10% OFF",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=662650",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "340374",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Orion Uptown Mall",
        "areaName": "K R Puram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=340374",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "247905",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Old Madras Road",
        "areaName": "Old Madras Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "500+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=247905",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "377549",
        "name": "RNR Biryani - Taste of 1953",
        "cloudinaryImageId": "oard3jyt2excnbv4afsd",
        "locality": "Old Madras Road",
        "areaName": "KR Puram",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Biryani",
          "South Indian",
          "Kebabs"
        ],
        "avgRating": 4.2,
        "parentId": "11620",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "promoted": true,
        "adTrackingId": "cid=12456611~p=2~adgrpid=12456611#ag1~mp=SWIGGY_IN~bl=FOOD~eid=e6abe9b0-e4c4-4ec5-9c61-116f32ef1dbf~aet=RESTAURANT~aeid=377549~srvts=1712122984012",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 9.9,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "9.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=377549",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "475113",
        "name": "Kolkata Famous Kati Roll",
        "cloudinaryImageId": "pmcdddk7ytatkzgikxos",
        "locality": "ravindra Reddy layout",
        "areaName": "Kadugodi",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "3550",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 53,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": "EXTRA 15% OFF",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=475113",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "835306",
        "name": "Kanti Sweets",
        "cloudinaryImageId": "86baaa68849815d44996821c86337f9b",
        "locality": "Saviraj Commercial Junction",
        "areaName": "Hoskote",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 4.6,
        "parentId": "4700",
        "avgRatingString": "4.6",
        "totalRatingsString": "10+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 21:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Mithai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Mithai.png",
                    "description": "Delivery!"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=835306",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "388296",
        "name": "Mad Over Donuts",
        "cloudinaryImageId": "0ae2b136fc38dc02491952c6bba2773b",
        "locality": "Orion Uptown Mall",
        "areaName": "Old Madras Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Sweets",
          "Bakery"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "611",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.3",
            "ratingCount": "10+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=388296",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "464266",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
        "locality": "Ayyappanagar",
        "areaName": "Mahadevpura",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "avgRating": 4.2,
        "parentId": "371281",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "promoted": true,
        "adTrackingId": "cid=12458201~p=3~adgrpid=12458201#ag1~mp=SWIGGY_IN~bl=FOOD~eid=677feba4-f3b7-4345-a66f-ffbb204aa12a~aet=RESTAURANT~aeid=464266~srvts=1712122984012",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 10,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "10.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=464266",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "518007",
        "name": "Sassy South",
        "cloudinaryImageId": "rlgsed3bedcvvuiha6ng",
        "locality": "Kannamangala",
        "areaName": "Whitefield",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian",
          "Chinese",
          "Fast Food",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "309454",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 7.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "7.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=518007",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "857506",
        "name": "Sangam Sweets ",
        "cloudinaryImageId": "858585b289d2954fce6941da93921da1",
        "locality": "Konadasapura Main Road",
        "areaName": "Hoskote",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Sweets",
          "North Indian",
          "Bakery"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "805",
        "avgRatingString": "4.5",
        "totalRatingsString": "2",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=857506",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "369778",
        "name": "Anand Sweets",
        "cloudinaryImageId": "8d786951646dc137f9bf859727f90391",
        "locality": "Seegehalli",
        "areaName": "Kadugodi",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Sweets",
          "North Indian",
          "Desserts",
          "Snacks"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "53",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 8.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "8.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Mithai.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Mithai.png",
                    "description": "Delivery!"
                  }
                },
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=369778",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "375063",
        "name": "Andhra Gunpowder",
        "cloudinaryImageId": "fyqerxszkyhxfekkyriy",
        "locality": "Seegehalli",
        "areaName": "Kadugodi",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Andhra",
          "Biryani",
          "South Indian"
        ],
        "avgRating": 4.4,
        "parentId": "10496",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=12312533~p=4~adgrpid=12312533#ag1~mp=SWIGGY_IN~bl=FOOD~eid=56d1db4f-ea46-4d25-84fd-59dca51e13d2~aet=RESTAURANT~aeid=375063~srvts=1712122984012",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 8.1,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "8.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-04 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Andhra.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "Rxawards/_CATEGORY-Andhra.png",
                    "description": "Delivery!"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=375063",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "678013",
        "name": "Wow! Chicken By Wow! Momo",
        "cloudinaryImageId": "ee9c2f12dd4fe8e3cb8c0e8a7ecc56be",
        "locality": "Hobli",
        "areaName": "Orion Uptown Mall",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Snacks",
          "Beverages",
          "Continental"
        ],
        "avgRating": 3.9,
        "parentId": "268366",
        "avgRatingString": "3.9",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹109"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=678013",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "378018",
        "name": "Chennupati Canteen",
        "cloudinaryImageId": "ytunqhquorfkr2zw5wqs",
        "locality": "Aavalahalli",
        "areaName": "Kr Puram",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.5,
        "parentId": "59934",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 22:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=378018",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },
    {
      "info": {
        "id": "752448",
        "name": "The Dessert Zone",
        "cloudinaryImageId": "9a198a0f05552f735eccce54f426cbd4",
        "locality": "Konadasapura Main Road",
        "areaName": "KONADASAPURA, BUDIGERE CROSS",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 3.7,
        "parentId": "10414",
        "avgRatingString": "3.7",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-03 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=752448",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
  ];
const RestaurantCard =(props) => {
     // const {resName, cuisine, ratingStars, deliveryTime} =props;
     const {resData}= props;
     //more optimized with optional operator
     const {name, cuisines, cloudinaryImageId, avgRating, costForTwo, deliveryTime} = resData?.info
    return (
        <div className="res-card">
            <img alt = "res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
             cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars rating</h5>
            <h5>{costForTwo}  for two</h5>
            <h5>{resData.info.sla.deliveryTime} minutes</h5>
        </div>
    )
}
const Body =() => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard    //with our own  props
                  resName ="Starbucks" 
                  cuisine ="Beverages, Cafe, Snacks, Desserts"
                  ratingStars = "4.4"
                  deliveryTime = "30-35 mins"/> */}

              {/* this with the swiggy data using props  */}
                {/* <RestaurantCard 
                 resData= {resListOfObjs[0]}/>  
                <RestaurantCard 
                 resData= {resListOfObjs[1]}/>
                      */}

              {
                resListOfObjs.map((restaurant) => (
                    <RestaurantCard resData ={restaurant}/>
                ))
              }         
                
            </div>
        </div>
    );
}
const AppLayout =() => { //main component
    return (
        // <h1>Hello Welcome to app 🍕</h1>
        <div className="app">
         <Header/>
         <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// ReactDOM.render(<AppLayout />, document.getElementById("root"));