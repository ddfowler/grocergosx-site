/* GrocerGoSx Orders v1.1.2 (7 Nov 2026): the "Confirmed" message is written from what the client chose at checkout. Shop 23 Dynamic Checkout
   puts those answers at the top of the order notes, one per line ("Already on the island." or "[For guest <name>. ]Arriving <Sun Nov 08>[, flight
   <flight>][, lands <2:30 PM>].", then "Stock the unit before arrival." or "Wait until check-in, …", then "Access: <front desk or reception |
   host or property manager | lockbox or door code | not sure yet>[ (<details>)]."). Only that block is read, top down; the client's own notes
   after it are not. Orders with no such block (taken by message, older orders) get the on-island wording. Dwayne edits the text before sending. */
function ggsxPlace(a){var p=String(a||"").split(/[,\n]/)[0].replace(/\s+/g," ").trim();if(!p||/^\d/.test(p))return"";var c=p.search(/\s(?:#|no\.?\s*)?\d/i);if(c>0)p=p.slice(0,c);p=p.replace(/[\s,.#:-]+$/,"").replace(/\s+(?:unit|apt|apartment|room|suite|villa|condo|bldg|building|no)\.?$/i,"").trim();if(!p||p.length>40||p.split(" ").length>6)return"";if(/\b(?:road|rd|street|st|avenue|ave|rue|route|drive|dr|boulevard|blvd|lane|ln|highway|hwy|chemin|impasse)\b/i.test(p))return"";if(/^(?:the\s+)?(?:villa|unit|apt|apartment|apartments|house|condo|building|bldg|room|suite|home|residence)$/i.test(p))return"";return p}
function ggsxConfirmText(ord){var o=ord||{};if(null==o.notes&&o.id){var full=At(o.id);if(full)o=full}
var name=X(o),dt=q(o.date),day=dt?dt.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}):"",rows=String(o.notes||"").split(/\r?\n/),at=0,info={},mm,
row=function(){return String(rows[at]||"").trim()};
if(/^Already on the island\.?$/i.test(row()))info.here=1;
else if(mm=/^(?:For guest (.+?)\. )?Arriving(?: [A-Z][a-z]{2} [A-Z][a-z]{2} \d{1,2})?(?:, flight (.+?))?(?:, lands (\d{1,2}:\d{2} [AP]M))?\.$/.exec(row())){info.arrive=1;info.guest=(mm[1]||"").trim();info.flight=(mm[2]||"").trim();info.lands=mm[3]||"";at++;
if(/^Stock the unit before arrival\.?$/i.test(row())){info.handle="stock";at++}else if(/^Wait until check-in\b/i.test(row())){info.handle="wait";at++}
if(mm=/^Access: (front desk or reception|host or property manager|lockbox or door code|not sure yet)\b/i.exec(row()))info.access={"front desk or reception":"desk","host or property manager":"host","lockbox or door code":"code","not sure yet":"tbd"}[mm[1].toLowerCase()]}
var guest=info.guest||"",whose=guest?"their":"your",noted=info.flight?whose+" flight details":info.lands?whose+" arrival time":"",
stocked=guest?"everything stocked before they arrive.":"your groceries stocked before your arrival.",
out=["Hi "+name+"!","Your GrocerGoSx order"+(guest?" for "+guest:"")+" is confirmed"+(day?" for "+day+(!info.arrive&&o.window?" ("+o.window+")":""):"")+"."];
if(info.arrive&&"stock"===info.handle){if("desk"===info.access||"host"===info.access){var place=ggsxPlace(o.address),who="host"===info.access?(guest?"you":"your host"):place?(/^the\s/i.test(place)?place:"the "+place)+" reception":"the front desk";
out.push((noted?"We\u2019ve noted "+noted+" and will coordinate with ":"We\u2019ll coordinate with ")+who+" to have "+stocked)}
else if("code"===info.access)out.push("We\u2019ve noted "+(noted?noted+" and ":"")+"the access code, and we\u2019ll have "+stocked);
else out.push((noted?"We\u2019ve noted "+noted+" and will have ":"We\u2019ll have ")+stocked+" Please send us the access details (reception, host contact or lockbox code) when you have them.")}
else if(info.arrive&&"wait"===info.handle)out.push((noted?"We\u2019ve noted "+noted+". ":"")+(guest?"Just message us once they\u2019ve checked in and we\u2019ll head over with everything.":"Just message us once you\u2019ve checked in and we\u2019ll head over with your groceries."));
else if(info.arrive)out.push((noted?"We\u2019ve noted "+noted+". ":"")+"We\u2019ll shop everything fresh and have "+(guest?"everything ready for their arrival.":"your groceries ready for your arrival."));
else out.push("We\u2019ll shop everything fresh and let you know when we\u2019re on our way.");
out.push("Once we\u2019ve sourced your requested items, we\u2019ll send you a secure payment link.","Thank you for choosing GrocerGoSx!");
return out.join("\n\n")}
