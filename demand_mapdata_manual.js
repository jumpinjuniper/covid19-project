function fetchDemandMapping() {
  simplemaps_countrymap_mapdata={
    main_settings: {
     //General settings
      width: "responsive",
      background_color: "#FFFFFF",
      background_transparent: "yes",
      border_color: "#ffffff",
      
      //State defaults
      state_description: "State description",
      state_color: "#88A4BC",
      state_hover_color: "#3B729F",
      state_url: "",
      border_size: 1.5,
      all_states_inactive: "no",
      all_states_zoomable: "no",
      
      //Location defaults
      location_description: "Location description",
      location_url: "",
      location_color: "#FF0067",
      location_opacity: 0.8,
      location_hover_opacity: 1,
      location_size: 25,
      location_type: "square",
      location_image_source: "frog.png",
      location_border_color: "#FFFFFF",
      location_border: 2,
      location_hover_border: 2.5,
      all_locations_inactive: "no",
      all_locations_hidden: "no",
      
      //Label defaults
      label_color: "#d5ddec",
      label_hover_color: "#d5ddec",
      label_size: 22,
      label_font: "Arial",
      hide_labels: "no",
      hide_eastern_labels: "no",
     
      //Zoom settings
      zoom: "yes",
      manual_zoom: "yes",
      back_image: "no",
      initial_back: "no",
      initial_zoom: "-1",
      initial_zoom_solo: "no",
      region_opacity: 1,
      region_hover_opacity: 0.6,
      zoom_out_incrementally: "yes",
      zoom_percentage: 0.99,
      zoom_time: 0.5,
      
      //Popup settings
      popup_color: "white",
      popup_opacity: 0.9,
      popup_shadow: 1,
      popup_corners: 5,
      popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
      popup_nocss: "no",
      
      //Advanced settings
      div: "demand_map",
      auto_load: "no",
      url_new_tab: "no",
      images_directory: "default",
      fade_time: 0.1,
      link_text: "View Website",
      popups: "detect",
      state_image_url: "",
      state_image_position: "",
      location_image_url: ""
    },
    state_specific: {
      CAN630: {
        name: "Manitoba",
        color: province_colors[0],
        hover_color: province_hover_colors[0],
        description: province_descriptions[0]
      },
      CAN631: {
        name: "Saskatchewan",
        color: province_colors[1],
        hover_color: province_hover_colors[1],
        description: province_descriptions[1]
      },
      CAN632: {
        name: "Alberta",
        color: province_colors[2],
        hover_color: province_hover_colors[2],
        description: province_descriptions[2]
      },
      CAN633: {
        name: "British Columbia",
        color: province_colors[3],
        hover_color: province_hover_colors[3],
        description: province_descriptions[3]
      },
      CAN634: {
        name: "Nunavut",
        color: province_colors[4],
        hover_color: province_hover_colors[4],
        description: province_descriptions[4]
      },
      CAN635: {
        name: "Northwest Territories",
        color: province_colors[5],
        hover_color: province_hover_colors[5],
        description: province_descriptions[5]
      },
      CAN636: {
        name: "Yukon",
        color: province_colors[6],
        hover_color: province_hover_colors[6],
        description: province_descriptions[6]
      },
      CAN682: {
        name: "Ontario",
        color: province_colors[7],
        hover_color: province_hover_colors[7],
        description: province_descriptions[7]
      },
      CAN683: {
        name: "Québec",
        color: province_colors[8],
        hover_color: province_hover_colors[8],
        description: province_descriptions[8]
      },
      CAN684: {
        name: "New Brunswick",
        color: province_colors[9],
        hover_color: province_hover_colors[9],
        description: province_descriptions[9]
      },
      CAN685: {
        name: "Nova Scotia",
        color: province_colors[10],
        hover_color: province_hover_colors[10],
        description: province_descriptions[10]
      },
      CAN686: {
        name: "Newfoundland and Labrador",
        color: province_colors[11],
        hover_color: province_hover_colors[11],
        description: province_descriptions[11]
      },
      CAN687: {
        name: "Prince Edward Island",
        color: province_colors[12],
        hover_color: province_hover_colors[12],
        description: province_descriptions[12]
      }
    },
    locations: {},
    labels: {},
    regions: {}
  };
}
