class Person {
    private name string ;
    public string Name {
        get {
            return value;
        }
        set {
            name = value 
        }
    }
}
class Program {
    static void Main (string[]args){
        Person person = new Person ();
        person .name = "neetu";
        Console.WriteLine (person .name);
    }
}

// Method Overloading
public class Calculator{
    public int Add(int a, int b){
        return a +b;

    }
    public double Add(double a , double b){
        return a +b ;
    }
}
// Complie time decide hota 
string reversestring (string input){
    char [] arr = input.ToCharArray();
    Array.Reverse(arr);
    return new string(arr);
}


string ReverseStrign(string input){
    char [] arr = input.ToCharArray();
    Array.Reverse(arr);
    return new string(arr);

}
string Reverserstring(string input){
    char [] arr = input .ToCharArray();
    Array.Reverse(arr);
    return new string(arr);
}
int[]numbers = {1,2,3,4}
int min = numbers.Min();
int max = numbers.Max();

bool isprime(int num ){
    if (num <= 1) return false;
    for (int i = 2; i <= Math.Sqrt(num); i++){
        if (num % i == 0) return false;
    }
    return true;
}
bool ispalindrome (string s){
    return s == new string(s.Reverse().ToArray());
}
bool is palindrome (string s ){
    return s.Sequenceequal(s.Reverse());

}

// method overding
class Parent {
    public virtual void show () => {
        Console.WriteLine ("Parent class");
    }
}
class Child : Parent {
    public override void show () => {
        Console.WriteLine ("Child class");
    }
}