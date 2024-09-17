export class Artwork {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.smallImg = data.imgUrls.small
    this.color = data.color
    this.admirers = []
    this.fullImg = data.imgUrls.full
  }
}



const art = {
  "id": "bfDi78eZaTE",
  "slug": "a-painting-of-a-building-with-a-gate-bfDi78eZaTE",
  "height": 3324,
  "width": 4000,
  "originalLink": "https://unsplash.com/photos/a-painting-of-a-building-with-a-gate-bfDi78eZaTE",
  "imgUrls": {
    "raw": "https://images.unsplash.com/photo-1695844919662-a4061ce17c43?ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258Nzh8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3",
    "full": "https://images.unsplash.com/photo-1695844919662-a4061ce17c43?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258Nzh8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3&q=85",
    "regular": "https://images.unsplash.com/photo-1695844919662-a4061ce17c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258Nzh8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3&q=80&w=1080",
    "small": "https://images.unsplash.com/photo-1695844919662-a4061ce17c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258Nzh8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3&q=80&w=400",
    "thumb": "https://images.unsplash.com/photo-1695844919662-a4061ce17c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258Nzh8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3&q=80&w=200",
    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1695844919662-a4061ce17c43"
  },
  "description": "Title: 1932P183 Rambelli, Near Rome, Italy Description: 1932P183 Rambelli, Near Rome, Italy, 1922 Sir David Young Cameron (d.1945) Keywords: Birmingham Museums Trust/Birmingham Museum & Art Gallery, Oil Painting, PCF, Art Movement/Post-Impressionism, Architecture/House, Italy/Rome, Courtyard https://dams.birminghammuseums.org.uk/asset-bank/action/viewAsset?id=8261",
  "altDescription": null,
  "attribution": "Birmingham Museums Trust",
  "color": "#594026",
  "admirers": [],
  "cached": true
}