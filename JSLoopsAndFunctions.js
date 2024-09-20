/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (NFT_Name, Eyes, Hat, Tails, Mouth) {
console.log("========mintNFT Called========");
    PM45 = {
        "_name" : NFT_Name,
        "_eyes" : Eyes,
        "_hat" : Hat,
        "_tails" : Tails,
        "_mouth" : Mouth
    }

    NFTs.push(PM45);
    console.log("Minted: " + NFT_Name);

    /*do {
        NFTs.push(PM45);
    } while (PM45.length > 0 );
     */
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
console.log("========listNFTs Called========");

for (let i = 0; i < NFTs.length; i++){
    console.log("===========================");
    console.log("ID: \t\t\t" + (i + 1));
    console.log("===========================");
    console.log("\nName: \t\t" + NFTs[i]._name);
    console.log("Eyes: \t\t" + NFTs[i]._eyes);
    console.log("Hat: \t\t\t" + NFTs[i]._hat);
    console.log("Tails: \t\t" + NFTs[i]._tails);
    console.log("Mouth: \t\t" + NFTs[i]._mouth + "\n");
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("========getTotalSupply Called========");
console.log("\nTotal number of NFTs minted : ", NFTs.length);
}

// call your functions below this line

mintNFT("Pretty Monkey", 6, "Cone", 3, "Monstrous");
mintNFT("Premium Monkey", 6, "Cone", 3, "Monstrous");
mintNFT("Philippine Monkey", 6, "Cone", 3, "Monstrous");
mintNFT("Daddy Monkey", 6, "Cone", 3, "Monstrous");
listNFTs();
getTotalSupply();
