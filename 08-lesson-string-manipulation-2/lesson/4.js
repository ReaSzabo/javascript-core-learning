
// Egy tömb összes elemén használhatjuk a replaceAll funkciót.
// Minden "alma" string részletet kicserélünk "meggy"-re.
var tombocske = ["almafa", "almamoly", "almalekvár", "almapálinka", "vadalma"];
for (var i = 0; i < tombocske.length; i = i + 1) {
  tombocske[i] = tombocske[i].replaceAll("alma", "meggy");
  console.log(tombocske[i]);
}
