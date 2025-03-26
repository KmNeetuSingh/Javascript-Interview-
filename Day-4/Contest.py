def man_of_the_match(t, test_cases):
    results = []
    for i in range(t):
        n, runs = test_cases[i]
        balls = 6 * n
        
        virat_score = 0
        ab_score = 0
        striker = "AB"
        
        for j in range(balls):
            if striker == "AB":
                ab_score += runs[j]
            else:
                virat_score += runs[j]
            
            # Strike rotates if the run is 1 or 3
            if runs[j] in [1, 3]:
                striker = "Virat" if striker == "AB" else "AB"
            
            # Strike rotates every 6 balls (end of over)
            if (j + 1) % 6 == 0:
                striker = "Virat" if striker == "AB" else "AB"
        
        if virat_score > ab_score:
            results.append("Virat Kohli")
        elif ab_score > virat_score:
            results.append("AB de Villiers")
        else:
            results.append("Tie")
    
    return results

# Input handling
t = int(input())
test_cases = []
for _ in range(t):
    n = int(input())
    runs = list(map(int, input().split()))
    test_cases.append((n, runs))

# Get results and print them
results = man_of_the_match(t, test_cases)
for result in results:
    print(result)
