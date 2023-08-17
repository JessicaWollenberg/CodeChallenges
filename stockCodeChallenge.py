prices1 = [5, 6, 7, 8, 9] #increase
prices2 = [2, 10, 5, 3, .5, 2, 5, 1] #increases and declines with decimals take first
prices3 = [10, 9, 8, 7] #decrease
prices4 = [2, 2, 2, 2] #no change
prices5 = [.5, 9, 6, 13, .3, 6, 16] #increases and declines with decimals take second

pricesInput = eval(input("Input array of market prices: "))
maxProfit = 0
minPriceToCheck = 10001

dayToBuy = 0
dayToSell = 0
potentialDayToBuy = 0
day = 1

for price in pricesInput:
    if(price < minPriceToCheck):
        minPriceToCheck = price
        potentialDayToBuy = day
    else:
        profit = price - minPriceToCheck
        if(profit > maxProfit):
            maxProfit = profit
            dayToSell = day
            dayToBuy = potentialDayToBuy
    day += 1

if(maxProfit != 0):
    print("Buy on day " + str(dayToBuy) + " (price = " + str(pricesInput[dayToBuy - 1]) + ") " + "and sell on day " + str(dayToSell) + " (price = " + str(pricesInput[dayToSell - 1]) + ").")
else:
    print("No profit to make")