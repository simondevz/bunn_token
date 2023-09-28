// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const name = "PETER";
  const symbol = "BUNN";
  const initialsupply = 50000;
  const recipient = "0x74d36C0e62529c570669A2eeE1584542b8A07Ab4";

  const Token = await ethers.deployContract("TOKEN", [
    name,
    symbol,
    initialsupply,
    recipient,
  ]);

  await Token.waitForDeployment();

  console.log(`Token deployed to ${Token.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
