import './Ownable.sol';

pragma solidity ^0.4.18;

contract PoliticalContributions is Ownable {
    event Record(uint32 date, string accounts, bool money, uint64 amount,
        string object, string uniformNumbers, string receipt, bool abnormal);
    function record(uint32 date, string accounts, bool money, uint64 amount,
        string object, string uniformNumbers, string receipt, bool abnormal) public onlyOwner {
        Record(date, accounts, money, amount, object, uniformNumbers, receipt, abnormal);
    }
}
