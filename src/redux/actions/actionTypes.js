

const ActionTypes = {
   
    // auth action types
    SignUpUser : "SignUpUser",
    SignUpUserError : 'SignUpUserError' ,
    SignInUser : "SignInUser" ,
    SignInUserError : "SignInUserError" ,
    ConfirmUser : "ConfirmUser" ,
    ConfirmUserError : "ConfirmUserError" ,
    Profile : "Profile" ,
    ProfileError : "ProfileError",
    ProfileEdit : "ProfileEdit" ,
    ProfileEditError : "ProfileEditError",

    // exchange action types
    CryptoPairList : "CryptoPairList",
    CryptoPairListError : "CryptoPairListError",

    CryptoOrderList : "CryptoOrderList",
    CryptoOrderListError : "CryptoOrderListError",

    MarketTradeList : "MarketTradeList" ,
    MarketTradeListError : "MarketTradeListError" ,

    UserOrderList : "UserOrderList" ,
    UserOrderListError : 'UserOrderListError' ,

    // wallet action types
    ExchangeDepositHistory : "ExchangeDepositHistory",
    ExchangeDepositHistoryError : "ExchangeDepositHistoryError"
}

export default ActionTypes ;