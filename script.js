/*
    Assignment 5
    Topan Das(0790712) 
*/

$(document).ready(function () {
  // your code here
  let randomID = () => {
    let rand = Math.floor(Math.random() * 26) + Date.now();
    return rand;
  };

  class ContentCard {
    constructor(title, description, categoryType) {
      this.id = randomID();
      this.title = title;
      this.description = description;
      this.categoryType = categoryType;
    }

    updateContent(title, description, categoryType) {
      title ? (this.title = title) : null;
      description ? (this.description = description) : null;
      categoryType ? (this.categoryType = categoryType) : null;
    }

    toString() {
      let containerID = "container-".concat(this.id.toString());
      let container = $(document.createElement("div"));
      let titleElement = $("<h4>" + this.title + "</h4>");
      let descriptionElement = $("<p>" + this.description + "</p>");
      let categoryElement = $("<div>" + this.categoryType + "</div>");

      container.append(titleElement, descriptionElement, categoryElement);
      return container
        .css({ border: "1px solid black" })
        .attr("id", containerID);
    }
  }

  let contentCards = [
    {
      title: "Salena Gomez",
      description:
        "Selena Marie Gomez is an American singer, songwriter, actress, and producer. Gomez began her acting career on the children's television series Barney"
        ,categoryType: "drama",
    },
    {
      title: "Justin ",
      description:
        "Justin Drew Bieber is a Canadian singer. Bieber is recognized for his genre-melding musicianship and has played an influential role in modern-day popular",
        categoryType: "classic",
    },
    {
      title: "Drake",
      description:
        "36 minutes ago — Aubrey Drake Graham (/ɔːˈbriː/ aw-BREE; born October 24, 1986) is a Canadian rapper, singer, and actor. An influential figure in contemporary popular music,",
        categoryType: "drama",
    },
    {
      title: "DJ Khalid",
      description:
        "Drake the expression of identity for the African American male. The narrator of the novel, a man who is never named but believes he is “invisible” to others socially, tells the story of his move from the South to college and then to New York City. In each location he faces extreme adversity and discrimination, falling into and out of work, relationships, and questionable social movements in a wayward and ethereal mindset. The novel is renowned for its surreal and experimental style of writing that explores the symbolism surrounding African American identity and culture. Invisible Man won the U.S. National Book Award for Fiction in 1953.",
      categoryType: "fiction",
    },
    {
      title: "One Direction",
      description:
        "One Direction, often shortened to 1D, are an English-Irish pop boy band formed in London, England in 2010. The group are composed of Niall Horan, Liam Payne ...",
         categoryType: "classic",
    },
  ];

  contentCards.forEach((contentCard) => {
    let content = new ContentCard(
      contentCard.title,
      contentCard.description,
      contentCard.categoryType
    );
    $("#content-item-list").append(content.toString());
  });
});