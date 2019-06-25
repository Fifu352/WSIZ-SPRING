package wsi.wykop;

import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;

public class CpuMem {
    public static void main(String[] args) {
        //odczytanie obciazenia systemu za ostatnia minute...
        OperatingSystemMXBean operatingSystemMXBean = ManagementFactory.getOperatingSystemMXBean();
        double x = operatingSystemMXBean.getSystemLoadAverage();
        System.out.println(x);
    }
}
