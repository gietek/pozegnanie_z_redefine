/*
W - ściana
B - biurko poziome dół, lewo
C - biurko poziome dół, prawo
b - biurko poziome ogólne lewo
c - biurko poziome ogólne prawo
D - biurko pionowe lewo, góra
E - biurko pionowe lewo, dół

P - biurko poziome góra, lewo
Q - biurko poziome góra, prawo

R - biurko pionowe prawo, góra
S - biurko pionowe prawo, dół


G - ściana szklana pozioma
H - ściana szklana pionowa
I - ściana szklana narożnik góra-lewo 
J - ściana szklana narożnik góra-prawo
K - ściana szklana narożnik dół-lewo
L - ściana szklana narożnik dół-prawo
M - ściana szklana łącznik pion-lewo
N - ściana szklana łącznik pion-prawo

Z - stół biały

A - drzwi poziome
*/

var rooms = [
  {
    coordinates: [17, 34],
    dimensions: [25, 15],
    points: 
      "WWWWWW..WWWWWWWWW..WWWWWW" +
      "W......................dW" +
      "W...H..................eW" +
      "WGGGI.........D...dR...dW" +
      "W........R....E...eS...eW" +
      "W.D......S....D...DR...dW" +
      "W.E.H...DR....E...ES...eW" +
      "WGGGI...ES...D....DR...dW" +
      "W.......DR...E....ES...eW" +
      "W.D.....ES...DR....R...dW" +
      "W.E.H...BC...ES....S...eW" +
      "WGGGM...................W" +
      "W...H...................." +
      "WPQ..............bcbc...." +
      "WWWWWWWWWWWWWWWWWWWWWWWWW"
  },
  {
    coordinates: [42, 34],
    dimensions: [24, 15],
    points: 
      "WWWWW..WWWWWWWW..WWWWWWW" +
      "...................H.R.W" +
      ".PQPQ..............H.S.W" +
      "..D.....DR...DR........W" +
      "..E.....ES...ES....H.R.W" +
      "..D..........DR....H.S.W" +
      "..E..........ES....NGGGW" +
      "..D..........DR....H.R.W" +
      "..E..........ES......S.W" +
      "..D..........DR....H...W" +
      "..E..........ES....NGGGW" +
      "..D................HBC.W" +
      "..EBC..............H...W" +
      ".......................W" +
      "WWWWWWWWWWWWWWWWWWWWWWWW"
  },
  {
    coordinates: [8, 34],
    dimensions: [9, 15],
    points: 
      "WW..WWWWW"+
      "W........"+
      "W........"+
      "W..bcbc.."+
      "W..bcbc.."+
      "W........"+
      "W........"+
      "WWWWWWWWW"+
      "........."+
      "........."+
      "........."+
      "........."+
      "........."+
      "........."+
      "WWWWWWWWW"
  },
  {
    coordinates: [-3, 34],
    dimensions: [11, 15],
    points: 
      "WWWWWWWW..W"+
      "W.........."+
      "WPQPQPQ...."+
      "W.........."+
      "W.........."+
      "WBCBCBC...."+
      "W.........."+
      "W.........."+
      "W.........."+
      "W.........."+
      "W.........."+
      "W.........."+
      "W.........."+
      "W.........."+
      "WWWWWWWWWWW"
  },
  {
    coordinates: [57, 23],
    dimensions: [10, 11],
    points: 
      "WWW......W"+
      "W........W"+
      "W........W"+
      "W.WWWWWWWW"+
      "W..W.....W"+
      "W..W..PQ.W"+
      "W..W.....W"+
      "W..WW.WWWW"+
      "...W.....W"+
      ".....bcb.W"+
      "...W.....W"
  },
  {
    coordinates: [0, 0],
    dimensions: [65, 11],
    points: 
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW.............."+
      "W......W...W...W...W...W.......W.....W....W..W....WWWWWWW........"+
      "W.D..R.W...W...W...W...W.PQ.PQ.W.PQ..W.dd.W..W.dd.W.....WWWWWWWWW"+
      "W.E..S.W...W...W...W...W.......W.....W.ee.W..W.ee.W..bc.W.......W"+
      "W.D....W...W...W...W...W.......W.....W.dd.W..W.dd.W.D...W.......W"+
      "W.E..R.W...W...W...W...W.....R.W.D...W.ee.W..W.ee.W.E...W.......W"+
      "W....S.W...W...W...W...W.....S.W.E...W.dd.W..W.dd.W.....W.......W"+
      "WBC....W...W...W...W...W.......W.....W.ee.W..W.ee.W.....W.......W"+
      "W......W...W...W...W...W.......W.....W....W..W....W.....W.......W"+
      "WWW..WWWWAWWWAWWWAWWWAWWWW..WWWWW..WWWW.WWWWAWWW.WWWWW.WWAWWWWWWW"+
      "..........................................................W.....W"
  },
  {
    coordinates: [19, 23],
    dimensions: [16, 11],
    points:
      "WWWWWWW..WWWWWWW"+
      "W..........Z..dW"+
      "W.ZZZZ........eW"+
      "W.............dW"+
      "W.ZZZZ........eW"+
      "W.............dW"+
      "W....Z........eW"+
      "WZZ..Z........dW"+
      "WWWWWWW..WWWWWWW"
  },
  {
    coordinates: [41, 11],
    dimensions: [24, 7],
    points:
      ".................W..bc.W"+
      "WWWWWWWWWWWWWWW.....ES.W"+
      "W...W............W.....W"+
      "W...W.bcbcbc..W.WWWWWWWW"+
      "W...W.bcbcbc..W........W"+
      "W...W.........W........W"+
      "WWAWWWWWWWWWWWWWWWWWWWWW"
  },
  {
    coordinates: [25, 11],
    dimensions: [16, 12],
    points:
      "................"+
      "W..............."+
      "W..WWWWWW......."+
      "W..W.Z..W......."+
      "W....Z..W......."+
      "W.......W......."+
      "W..WWWWWWW......"+
      "W..W.....W......"+
      "W........W......"+
      "W..WWWWWWW......"+
      "W........W......"+
      "W..W.....W......"
  },
  {
    coordinates: [35, 23],
    dimensions: [5, 11],
    points:
      "WWWWW"+
      "....."+
      "....."+
      "....."+
      "....."+
      "....."+
      "....."+
      "....."+
      "WWWWW"+
      "....."+
      "....."
  },
  {
    coordinates: [40, 18],
    dimensions: [19, 16],
    points:
      "..................."+
      "..................."+
      ".........PQbc......"+
      "..................."+
      "..................."+
      "WWWWWWWWWAWWWWWWWWW"
  },
  {
    coordinates: [59, 18],
    dimensions: [7, 5],
    points:
      "......W"+
      "......W"+
      "......W"+
      "......W"+
      "......W"
  }
];


