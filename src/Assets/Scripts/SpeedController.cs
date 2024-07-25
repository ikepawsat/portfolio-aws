//John's work with some minor tweaks to get it to work for me.
//Allows me to speed up or slow down the simulation

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimSpeedController : MonoBehaviour
{
    private float fpsSum = 0;
    private int frameCount = 0;
    private float timeSum = 0;
    public bool autoAdjust = false;
    public float gameSpeed = 1;

    void Update()
    {
        // Toggle autoAdjust with the space bar
        if (Input.GetKeyDown(KeyCode.Space))
        {
            autoAdjust = !autoAdjust;
        }

        // Calculate fps
        float fps = 1.0f / Time.unscaledDeltaTime;

        // Accumulate fps for averaging
        fpsSum += fps;
        frameCount++;

        // Adjust game speed every second
        timeSum += Time.unscaledDeltaTime;
        if (timeSum >= 1.0f)
        {
            float fpsAvg = fpsSum / frameCount;
            timeSum = 0;
            fpsSum = 0;
            frameCount = 0;

            if (autoAdjust)
            {
                AdjustGameSpeed(fpsAvg);
            }
            else
            {
                Time.timeScale = gameSpeed;
            }
        }
    }

    void AdjustGameSpeed(float fpsAvg)
    {
        if (fpsAvg < 60)
        {
            gameSpeed *= 0.9f;
        }
        else if (fpsAvg > 60 && gameSpeed < 100)
        {
            gameSpeed *= 1.1f;
        }

        // Clamp game speed to prevent freezing or crashing
        gameSpeed = Mathf.Clamp(gameSpeed, 0.1f, 100f);

        Time.timeScale = gameSpeed;
    }
}
