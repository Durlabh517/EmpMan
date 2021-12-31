import re
print("Welcome to the PYG LATIN GAME")

def pyg(word):
    
    if len(word)>0 and re.findall('[0-9]+', word) != int:
      
        pyg = 'ay'
        split = word.split()   # split() syntax splits the words and puts them in a list
        
        if len(split)>0:
                for i in split:
                    if len(i)>0:
                        i = i + i[0] + pyg
                        i = i[1:]
                        print(i,end=" ")    # end='' lets the result to be printed in the horizontal line
        
        else:
            return ("Try again without numbers and special characters")
    else:
        print("\n Entry should cointain only string and should not be empty")

word = input('Type string: ') 
pyg(word)