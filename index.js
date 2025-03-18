import axios from "axios";
import "dotenv/config"

const createTags =  async (course, lessons) => {
  // console.log("it's working")

  const config = {
    url: "https://api.ontraport.com/1/Tags",
    method: "post",
    headers: {
      "Api-Key": process.env.API_KEY,
      "Api-Appid": process.env.APP_ID,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    params: {
      object_type_id: 0

    }
  }

  for (let i = 1; i <= lessons; i++){
    for (let j = 25; j <= 75; j+= 25){
      let tag_name = `KI-C${course}-R${i}-${j}`
      config.params.tag_name = tag_name
      
      try {
        let res = await axios(config)
        console.log(`${tag_name} created status: ${res.status}`)  
      } catch (error) {
        console.log(`error creating tag ${tag_name}`)
      }
      
    }
  }

  
}


createTags(3, 12)