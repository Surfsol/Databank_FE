const name = "procedurecommoditycat";
const arr = [
  "Kampala",
  "Busia",
  "Ngozi",
  "Eldoret",
  "Owino",
  "Gulu",
  "Mbale",
  "Mombasa",
  "Lira",
  "Kasese",
  "Tororo",
  "Juba",
  "Arusha",
  "Bujumbura",
  "Kisumu",
  "Nairobi",
  "Isingiro Market",
  "Dar es salaam",
  "Mbeya",
  "Nakuru",
  "Kabale",
  "Kamembe",
  "Masindi",
  "Owino Market",
  "Rubavu",
  "Meru",
  "Ruhengeri",
  "Soroti",
  "Gitega",
  "Ruhuha",
  "Dodoma",
  "Kisii",
  "Kitale",
  "Mbale Market",
  "Mulindi",
  "Iringa",
  "Machakos",
  "Wajir",
  "Kakamega",
  "Kimironko",
  "Malindi",
  "Kamuli Market",
  "Loitkt",
  "Hoima",
  "Kamuli",
  "Iganga",
  "Jinja",
  "Kalerwe Market",
  "Arua",
  "Embu",
  "Imenti",
  "Kamega",
  "Nakawa",
  "Rubavu Market",
  "Kapchorwa",
  "Karatina",
  "Kitui",
  "Ementi",
  "Makueni",
  "Garisa",
  "Kalerwe",
  "Masaka",
  "Luwero Market",
  "Kajiado",
  "Kakam.",
  "Nakasero",
  "Nakawa Market",
  "Gicumbi",
  "Yei",
  "Mubende",
  "Mbarara",
  "Kasese Market",
  "kitale",
  "Average",
  "Code",
  "BUSIA",
  "Isiolo",
  "Bugiri Market",
  "Kabale Market",
  "id",
  "Kisenyi",
  "Goma Birere ",
  "Goma (Birere) ",
  "Lubumbashi",
  "Kasumbalesa market",
  "Uvira (Maendeleo)",
  "Bukavu (Kadutu)",
  "Kolwezi market",
  "Tunduma Market",
  "Mwanza",
  "Isingiro",
  "Bukavu",
  "Likasi market",
  "Rubavu ",
  "Goma ",
  "Kiboga",
  "Uvira ",
  "code",
  "kisii",
  "Kasumbalesa",
  "Goma",
  "Likasi",
  "Uvira",
  "Tunduma",
  "Mbsa",
  "Kolwezi",
  "Bungoma",
  "Oloitoktok",
  "Kasungu",
  "Balaka",
  "Mitundu",
  "Mwanga",
  "Bukoba",
  "Chimbiya",
  "Mzuzu",
  "Ilala (Buguruni)",
  "Kamwendo Market",
  "Mzimba",
  "Mvera",
  "MBSA",
  "id ",
  "Mchinji",
  "Bugiri",
  "Gichumbi",
  "Garissa",
  "Kigoma",
  "Kamwenge",
  "Kobero",
  "Kigali",
  "Gahoromani",
  "Gahanga",
  "Gacurabwenge",
  "Byumba",
  "Kimisagara",
  "Kabaya",
  "Busasamana",
  "Nyakarambi",
  "Buhanda",
  "CongoNil",
  "Gashyushya",
  "Base",
  "Gaseke",
  "Butare",
  "Gisenyi",
  "Gasarenda",
  "Kibuye",
  "Musanze",
  "Ziniya",
  "Matimba",
  "Kiramuruzi",
  "Shyorongi",
  "Birambo",
  "Nyabugogo",
  "Kyegegwa",
  "Nyagatare",
  "Gakenke",
  "Mahoko",
  "Kabarole",
  "Songea",
  "TAVETA",
  "Kirambo",
  "Muhanga",
  "Kibungo",
  "Kamwendo",
  "Bugarama",
  "KG",
  "Kitale ",
  "Dar es Salaam - llala Buguruni",
  "Lindi",
  "Kabarondo",
  "Kilimanjaro - Moshi",
  "Kagera - Bukoba",
  "Dar es Salaam - Temeke Tandika",
  "Rushashi",
  "Mbeya - Mwanjelwa",
  "Mara - Musoma",
  "Kyankwanzi",
  "Karenge",
  "Kayenzi",
  "Rwamagana",
  "Ngororero",
  "kg",
  "Dodoma - Kibaigwa",
  "kirambo",
  "Salima",
  "Nkora",
  "Karambi",
  "Rukomo",
  "Ndago",
  "Gatore",
  "Mubyangabo",
  "Gikongoro",
  "Nyamirambo",
  "Kizi",
  "Liwonde",
  "Ruhango",
  "Kibirizi",
  "Nyamata",
  "Mkando",
  "Mukamira",
  "Intunga",
  "Weight",
  "Mponela",
  "Muhondo",
  "Tunduma ",
  "Loitoktok",
  "Cereals - Other",
  "Cereals - Maize",
  "kakamega",
  "ID ",
  "Babati",
  "Kibaigwa",
  "Nkhotakota",
  "kitui",
  "Musha",
  "Nkhamenya",
  "Rukiga",
  "Majengo",
  "Kyenjonjo"
];
const objectify = (key, array) => {
  const arr = [];
  console.dir(array, { maxArrayLength: null });
  array.forEach(cv => arr.push({ [key]: cv }));
  return arr;
};

console.dir(objectify(name, arr.sort()), { maxArrayLength: null });
