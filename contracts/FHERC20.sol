// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;


import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";
import "./ConfidentialFungibleToken.sol";
/// @title A simple FHE ERC20 contract
contract FHERC20 is SepoliaConfig ,ConfidentialFungibleToken {
    /// @dev Initializes the contract with the given name and symbol.
    /// @param name The name of the token.
    /// @param symbol The symbol of the token.
    constructor(string memory name, string memory symbol)
        ConfidentialFungibleToken(name, symbol,"")
    {}

function mint ( euint64 amount) external {
        _mint(msg.sender, amount);
    }
    
}