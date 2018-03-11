# Cash

To install Cash :
```
> cd @path/to/go/cash
> npm install
```
# How To

First thing first, you can learn about the version with
```
> node bin/index.js --version
```

To visualize the up-and-running command, do
```
> node bin/index.js --help
```

Next, on how to use it.
```
> node bin/index.js <amount> <currency>
```
Will convert the "<amount>" of "<currency>" into the other <currency> that we have to specify after the first "<currency>".
For instance :
```
> node bin/index.js 100 usd eur aud cad
```
will convert 100 American Dollars into Euros, Austalian Dollar and Canadian Dollar.

Here is the list of available currency

| Currency           | Shortcut |
|--------------------|----------|
|"Australian Dollar" |"AUD"     |
|"Russian Rouble"    |"RUB"     |
|"Euro"              |"EUR"     |
|"Bulgarian Lev"     |"BGN"     |
|"Real Brazilian"    |"BRL"     |
|"Canadian Dollar"   |"CAD"     |
|"Swiss Franc"       |"CHF"     |
|"Chinese Yuan"      |"CNY"     |
|"Czech Koruna"      |"CZK"     |
|"Danish Krone"      |"DKK"     |
|"Pound Sterling"    |"GBP"     |
|"Hong Kong Dollar"  |"HKD"     |
|"Croatian Kuna"     |"HRK"     |
|"Hungarian Forint"  |"HUF"     |
|"Indonesian Rupiah" |"IDR"     |
|"Israeli Shekel"    |"ILS"     |
|"Indian Rupee"      |"INR"     |
|"Japanese Yen"      |"JPY"     |
|"South Korean Won"  |"KRW"     |
|"Mexican Peso"      |"MXN"     |
|"Malaysian Ringgit" |"MYR"     |
|"Norwegian Krone"   |"NOK"     |
|"Philippine Peso"   |"PHP"     |
|"Polish Zloty"      |"PLN"     |
|"Romanian New Leu"  |"RON"     |
|"Swedish Krona"     |"SEK"     |
|"Singapore Dollar"  |"SGD"     |
|"Thai Baht"         |"THB"     |
|"Turkish Lira"      |"TRY"     |
|"US Dollar"         |"USD"     |
|"South African Rand"|"ZAR"     |
|"New Zealand Dollar"|"NZD"     |

All the aforementioned currency can be used in the command.
