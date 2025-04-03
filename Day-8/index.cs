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