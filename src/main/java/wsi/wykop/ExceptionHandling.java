package wsi.wykop;

public class ExceptionHandling {


    public static void main(String[] args) {
        ExceptionHandling g = new ExceptionHandling();


        try {
            System.out.println(g.function1());
        } catch (IllegalArgumentException e) {
            System.out.println("dziwny argument " + e);
        } catch (RuntimeException e) {
            System.out.println("wystąpił błąd: " + e);
        }


    }

    String readFile(String filename) {
        //czytaj zawartosc pliku "filename"
        System.out.println("start readfile");
        String res = "abra kadabra";
        if (filename.equals("a.txt")) {
            throw new RuntimeException("Plik nie istnieje");
        }
        if (filename.equals("hack.txt")) {
            throw new IllegalArgumentException("hack!!!!");
        }
        System.out.println("end readfile");

        return res;
    }

    String function2() {
        System.out.println("start function2");
        String res = readFile("hack.txt");
        System.out.println("end function2");
        return res;
    }

    String function1() {
        System.out.println("start function1");
        String res = function2();
        System.out.println("end function1");

        return res;
    }
}
