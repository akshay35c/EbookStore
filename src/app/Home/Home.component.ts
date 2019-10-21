import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  pro: string = "myproducts";
  products: any[] = [
    {
      "productId": 2101,
      "productName": "Brave New World",
      "productType": "E-Book",
      "productCategoryId": "Sci-Fi",
      "productLanguageId": "English",
      "productMaxPrice": 550,
      "productSellPrice": 450,
      "productDescription": "Far in the future, the World Controllers have created the ideal society. Through clever use of genetic engineering, brainwashing, and recreational sex and drugs all its members are happy consumers. Bernard Marx seems alone in harboring an ill-defined longing to break free. A visit to one of the few remaining Savage Reservations where the old, imperfect life, still continues, maybe the cure for his distress...",
      "productAuthor": "Aldous Huxley",
      "productPublisher": "The Daily Telegraph",
      "productImage": `/src/assets/Images/braveWorld.jpg`,
      "productAvailRent": true,
      "productAvailLent": true,
      "productRentAmount": 45,
      "productRentDays": 10
    },
    {

      "productId": 2124,
      "productName": "Red Dwarf: Infinity Welcomes Careful Drivers",
      "productType": "E-Book",
      "productCategoryId": "Sci-Fi",
      "productLanguageId": "English",
      "productMaxPrice": 420,
      "productSellPrice": 350,
      "productDescription": "After celebrating his birthday with a Monopoly-board pub crawl around London, he came to in a burger bar on one of Saturn's moons, wearing a lady's pink crimplene hat and a pair of yellow fishing waders, with no money and a passport in the name of 'Emily Berkenstein'.",
      "productAuthor": "Grant Naylor",
      "productPublisher": "Mek",
      "productImage": `src\assets\Images\redDwarf.jpg`,
      "productAvailRent": true,
      "productAvailLent": false,
      "productRentAmount": 35,
      "productRentDays": 7
    },
    {
      "productId": 2311,
      "productName": "A history of the warfare of science with theology in Christendom",
      "productType": "E-Book",
      "productCategoryId": "Sci-Fi",
      "productLanguageId": "English",
      "productMaxPrice": 340,
      "productSellPrice": 300,
      "productDescription": "",
      "productAuthor": "Andrew Dickson White",
      "productPublisher": "Great Minds Secret",
      "productImage": "src\assets\Images\HistoryOfWelf.jpg",
      "productAvailRent": true,
      "productAvailLent": true,
      "productRentAmount": 30,
      "productRentDays": 7
    },
    {
      "productId": 3142,
      "productName": "Cranford",
      "productType": "E-Book",
      "productCategoryId": "Romance",
      "productLanguageId": "English",
      "productMaxPrice": 220,
      "productSellPrice": 200,
      "productDescription": "",
      "productAuthor": "Elizabeth Cleghorn Gaskell",
      "productPublisher": "Clean Up Bot",
      "productImage": "src\assets\Images\cranford.jpg",
      "productAvailRent": false,
      "productAvailLent": true,
      "productRentAmount": 20,
      "productRentDays": 5
    },
    {
      "productId": 3765,
      "productName": "The woodlanders",
      "productType": "E-Book",
      "productCategoryId": "Romance",
      "productLanguageId": "English",
      "productMaxPrice": 300,
      "productSellPrice": 250,
      "productDescription": "When country-girl Grace Melbury returns home from her middle-class school she feels she has risen above her suitor, the simple woodsman Giles Winterborne. Though marriage had been discussed between her and Giles, Grace finds herself captivated by Dr Edred Fitzpiers, a sophisticated newcomer to the area - a relationship that is encouraged by her socially ambitious father. Hardy's novel of betrayal, disillusionment and moral compromise depicts a secluded community coming to terms with the disastrous impact of outside influences. And in his portrayal of Giles Winterborne, Hardy shows a man who responds deeply to the forces of the natural world, thought they ultimately betray him.",
      "productAuthor": "Thomas Hardy",
      "productPublisher": "Dorset",
      "productImage": "src\assets\Images\woodlander.jpg",
      "productAvailRent": true,
      "productAvailLent": true,
      "productRentAmount": 30,
      "productRentDays": 7
    },
    {
      "productId": 3866,
      "productName": "Sprig Muslin",
      "productType": "E-Book",
      "productCategoryId": "Romance",
      "productLanguageId": "English",
      "productMaxPrice": 480,
      "productSellPrice": 450,
      "productDescription": "Sir Gareth Ludlow was a sought-after bachelor in London high society -- wealthy, noble, handsome... and brokenhearted since the death of his true love many years ago. Resigned to marry, Sir Gareth decides to request the hand of a woman he respects and admires -- Lady Hester Thealer. But fate takes an impish turn when, en route to propose to his sensible acquaintance Lady Hester, Ludlow finds a saucy young lady who identifies herself as Amanda Smith.",
      "productAuthor": "Georgette Heyer",
      "productPublisher": "ReadNowSecond",
      "productImage": "src\assets\Images\geograg.jpg",
      "productAvailRent": true,
      "productAvailLent": false,
      "productRentAmount": 40,
      "productRentDays": 10
    },
    {
      "productId": 5676,
      "productName": "Harry Potter and the Philosopher's Stone",
      "productType": "E-Book",
      "productCategoryId": "Fantasy",
      "productLanguageId": "English",
      "productMaxPrice": 650,
      "productSellPrice": 600,
      "productDescription": "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
      "productAuthor": "J. K. Rowling",
      "productPublisher": "Bloomsbury",
      "productImage": "src\assets\Images\harrypotter.jpg",
      "productAvailRent": true,
      "productAvailLent": false,
      "productRentAmount": 150,
      "productRentDays": 15
    },
    {
      "productId": 5123,
      "productName": "Alice's Adventures in Wonderland / Through the Looking Glass",
      "productType": "E-Book",
      "productCategoryId": "Fantasy",
      "productLanguageId": "English",
      "productMaxPrice": 700,
      "productSellPrice": 670,
      "productDescription": "A very real little girl named Alice follows a remarkable rabbit down a rabbit hole and steps through a looking-glass to come face to face with some of the strangest adventures and some of the oddest characters in all literature. The crusty Duchess, the Mad Hatter, the weeping Mock Turtle, the diabolical Queen of Hearts, the Cheshire-Cat, Tweedledum and Tweedledee--each one is more eccentric, and more entertaining, than the last.",
      "productAuthor": "Lewis Carroll",
      "productPublisher": "back cover",
      "productImage": "src\assets\Images\alice.jpg",
      "productAvailRent": false,
      "productAvailLent": true,
      "productRentAmount": 100,
      "productRentDays": 12
    },
    {
      "productId": 5454,
      "productName": "Charlotte's Web",
      "productType": "E-Book",
      "productCategoryId": "Fantasy",
      "productLanguageId": "English",
      "productMaxPrice": 850,
      "productSellPrice": 700,
      "productDescription": "This is the book which turned me into both a book lover, and an English Major, at age 5. My sister, who was 8 at the time, had checked it out and asked my mother to read it aloud to her. I listened in, and was hooked from the first page. As soon as I could comprehend the basics of reading, this is the book I read, more than any other. The story (Talking animals! Friendly spiders!) is down-home, laugh-out-loud funny, but also charming and slighly sad, but still optimistic, at it's conclusion.",
      "productAuthor": "E. B. White",
      "productPublisher": "Zuckerman's Farm",
      "productImage": "src\assets\Images\charlot.jpg",
      "productAvailRent": false,
      "productAvailLent": true,
      "productRentAmount": 70,
      "productRentDays": 15
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
