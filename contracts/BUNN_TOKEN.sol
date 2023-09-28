// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TOKEN is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialsupply, address recipient) ERC20(name, symbol){
        _mint(recipient, initialsupply*10**18);
    }
}