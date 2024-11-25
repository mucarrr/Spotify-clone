const url = "https://shazam.p.rapidapi.com/search?term=adele&locale=en-US";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "6f372f0744msh8a5cb5b13eb958cp1b42dajsn014f943862f6",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  async getPopular() {
    /* const response = await fetch(url, options);
      const data = await response.json();
      const formatted = data.tracks.hits.map((item)=>item.track)
      console.log(formatted);
      
      return (formatted); */
    const data = await this.searchMusic("ed sheeran");
    const data1 = await this.searchMusic("billie eilish");
    const data2 = await this.searchMusic("taylor swift");
    const data3 = await this.searchMusic("matiz");

    return [...data, ...data1, ...data2, ...data3];
  }
  async searchMusic(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US&offset=0&limit=5`;
    const response = await fetch(url, options);
    const data = await response.json();
    const formatted = data.tracks.hits.map((item) => item.track);
    return formatted;
  }
}
