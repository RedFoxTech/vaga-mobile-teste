package isa.silva.pokelist.utils;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;


public class Utils {


    public static void showMessage(Context context, String title, String message) {
        AlertDialog.Builder dlgAlert = new AlertDialog.Builder(context);
        dlgAlert.setMessage(message);
        dlgAlert.setTitle(title);
        dlgAlert.setPositiveButton("OK", null);
        dlgAlert.setCancelable(false);
        dlgAlert.create().show();
    }


    public static ProgressDialog createAndShowProgressDialog(Context mContext) {
        ProgressDialog pd;
        pd = new ProgressDialog(mContext);
        pd.setMessage("Aguarde...");
        pd.setCancelable(false);
        pd.setIndeterminate(true);
        pd.show();
        return pd;
    }

    public static void dismissProgressDialog(ProgressDialog pd) {
        if (pd != null && pd.isShowing()) {
            try {
                pd.dismiss();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

}
