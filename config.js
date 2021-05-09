const config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1IjoiaWZ0aWVyMjMiLCJhIjoiY2tvNzlxMjh0MTZiMDJuczc3bm9lODk3NSJ9.T6z35LZS7hGSLTMrIlFs4A",
  CSV: "./Vaccine.csv",
  center: [-79.401791, 43.728139],
  zoom: 10,
  title: "Find COVID-19 Vaccination Sites",
  description:
    "Use this tool to discover Vaccination sites throughout Toronto. Use the filter to select various options or the search box to find the nearest Vaccine sites. \n\n Updated: May 8th, 2021",
  sideBarInfo: ["Location_Name","Type", "Blank", "Address","Zip", "Blank", "Phone", "URL"],
  popupInfo: ["Location_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Operated by: ",
      columnHeader: "Type",
      listItems: [
        "Pharmacy",
        "City-Operated Clinic",
        "Scarborough Health Network",
        "Michael Garron Hospital",
      ],
    },
    {
      type: "checkbox",
      title: "Vaccine Type: ",
      columnHeader: "Vaccine_type", // Case sensitive - must match spreadsheet entry
      listItems: ["AstraZeneca", "Pfizer", "Not sure"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "checkbox",
      title: "Booking: ",
      columnHeader: "Booking_walk",
      listItems: [
        "Appoinment/Booking",
        "Walk-in"
      ],
    },
  ],
};
