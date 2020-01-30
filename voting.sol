pragma solidity ^0.4.23;

contract Voting{
    
    mapping (uint8=>uint16) public votesReceived;
    mapping (address=>uint8) public votedOrNot;
    
 
    function voteForCandidate(uint8 candidate) public {
        
        if (votedOrNot[msg.sender]==0){
            votedOrNot[msg.sender]=1;
            votesReceived[candidate] +=1;
        }else{
            revert("error");
        }
        
    }
    function totalVotesFor(uint8 candidate) view public returns(uint16){
        return votesReceived[candidate];
        
    }
    
    
}