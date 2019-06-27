package wsi.service;

import org.springframework.aop.scope.ScopedObject;
import org.springframework.stereotype.Service;
import wsi.model.ExecResponse;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Service
public class ExecService {

    public ExecResponse executeCommand(String command) {
        //tu wykonać komendę
        //potem listy stringów wyników podać do zwracanej ExecResponse
        List<String> output = new ArrayList<>();
        List<String> errput = new ArrayList<>();

        try {
            String s = "";
            Process p = Runtime.getRuntime().exec(command);

            BufferedReader stdInput = new BufferedReader(new
                    InputStreamReader(p.getInputStream()));

            BufferedReader stdError = new BufferedReader(new
                    InputStreamReader(p.getErrorStream()));
            while ((s = stdInput.readLine()) != null) {
                output.add(s);
            }
            while ((s = stdError.readLine()) != null) {
                errput.add(s);
            }
        } catch (IOException e) {
            errput.add(e.toString());
        }

        return new ExecResponse(command, "", output, errput);
    }

}
