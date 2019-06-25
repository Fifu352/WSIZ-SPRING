package wsi.wykop;

import java.util.ArrayList;
import java.util.List;

public class CommandRun {
    public static void main(String[] args) {
        List<String> output = new ArrayList<>();
        List<String> errput = new ArrayList<>();
        String command = "df -hT";

        //na windows można spróbować:
        // 'tasklist' ew. 'tasklist | grep notepad'
        // potem mając pid
        // taskkill -pid 20096

//        try {
//            String s = "";
//            Process p = Runtime.getRuntime().exec(command);
////            p.destroy();  //zabija proces
////            System.out.println(p.pid()); //wypisuje id procesu (systemowe)
////            System.out.println(p.isAlive());    //true jeśli proces ciągle działa
//
//
//            BufferedReader stdInput = new BufferedReader(new
//                    InputStreamReader(p.getInputStream()));
//
//            BufferedReader stdError = new BufferedReader(new
//                    InputStreamReader(p.getErrorStream()));
//
//            // read the output from the command
//            while ((s = stdInput.readLine()) != null) {
//                output.add(s);
//            }
//
//            // read any errors from the attempted command
//            while ((s = stdError.readLine()) != null) {
//                errput.add(s);
//            }
//        } catch (IOException e) {
//            errput.add(e.toString());
//        }
//
//        System.out.println("-------- out: ");
//        output.forEach(line->{
//            System.out.println(line);
//        });
//        System.out.println("-------- err: ");
//        errput.forEach(line->{
//            System.out.println(line);
//        });

    }
}
