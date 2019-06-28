package wsi.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j

public class PasswordService {



    public HashMap<String, String> users = new HashMap<String, String>();

    public PasswordService(){
        log.info("Tworzę serwis haseł");


    }

    public Boolean check_password(String user_name, String pass) {
        for(Map.Entry<String, String> user:users.entrySet()){
            if(user.getKey().equals(user_name) && user.getValue().equals(pass)){
                return true;
            }
        }
        return false;
    }

    public Boolean change_pass(String user_name, String pass, String new_pass) {
        for(Map.Entry<String, String> user:users.entrySet()){
            if(user.getKey().equals(user_name) && user.getValue().equals(pass)){
                user.setValue(new_pass);
                return true;
            }
        }
        return false;
    }




}
